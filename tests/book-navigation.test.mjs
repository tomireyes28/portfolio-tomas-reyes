import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../context/bookNavigation.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { initialNavigation: initial, navigationReducer: reduce } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const navigate = (state, to, mode = 'auto') => reduce(state, { type: 'navigate', to, mode });
const finish = (state, commit = true) => reduce(state, { type: 'finish', id: state.turn.id, commit });

test('a chapter jump keeps the outgoing spread until the turn completes', () => {
  const turning = navigate(initial, 'contact');
  assert.equal(turning.activeSection, 'about');
  assert.equal(turning.turn.from, 'about');
  assert.equal(turning.turn.to, 'contact');
  assert.equal(finish(turning).activeSection, 'contact');
});
test('rapid requests are ignored while a page is turning', () => {
  const turning = reduce(initial, { type: 'next' });
  assert.equal(navigate(turning, 'skills'), turning);
  assert.equal(reduce(turning, { type: 'prev' }), turning);
  assert.equal(finish(turning).activeSection, 'projects');
});
test('closing invalidates a completion even after reopening and starting another turn', () => {
  const old = navigate(initial, 'contact');
  const closed = reduce(old, { type: 'close' });
  const reopened = navigate(reduce(closed, { type: 'open' }), 'skills');
  assert.equal(reduce(reopened, { type: 'finish', id: old.turn.id, commit: true }), reopened);
  assert.equal(finish(reopened).activeSection, 'skills');
});
test('a cancelled drag stays on its source and allows another request', () => {
  const cancelled = finish(navigate(initial, 'projects', 'drag'), false);
  assert.equal(cancelled.activeSection, 'about');
  assert.equal(cancelled.turn, null);
  assert.equal(navigate(cancelled, 'skills').turn.to, 'skills');
});
test('a completed backward drag uses the same navigation state', () => {
  const contact = finish(navigate(initial, 'contact'));
  const drag = navigate(contact, 'story', 'drag');
  assert.equal(drag.turn.mode, 'drag');
  assert.equal(finish(drag).activeSection, 'story');
});
test('a gesture released before rendering can cancel the queued request', () => {
  const cancelled = reduce(navigate(initial, 'projects', 'drag'), { type: 'cancel' });
  assert.equal(cancelled.turn, null);
  assert.equal(cancelled.activeSection, 'about');
});
test('boundary navigation cannot exceed the last section and previous from the first closes', () => {
  const last = finish(navigate(initial, 'contact'));
  assert.equal(reduce(last, { type: 'next' }), last);
  const closed = reduce(initial, { type: 'prev' });
  assert.equal(closed.isOpen, false);
  assert.equal(reduce(closed, { type: 'next' }), closed);
});
test('requesting the current chapter is a no-op', () => {
  assert.equal(navigate(initial, 'about'), initial);
});
