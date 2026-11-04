import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../lib/pageTurn.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { pageTurnAngle: angle, shouldCompleteTurn: complete, turnSettleDuration: duration } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);

test('an edge only turns in its intended direction and clamps at the destination', () => {
  assert.equal(angle(150, 400, 'next'), 0);
  assert.equal(angle(-150, 400, 'prev'), 0);
  assert.equal(angle(-1000, 400, 'next'), -180);
  assert.equal(angle(1000, 400, 'prev'), 180);
  assert.ok(Number.isFinite(angle(-10, 0, 'next')));
});
test('drag travel is proportional to page width in both directions', () => {
  assert.equal(angle(-180, 400, 'next'), -90);
  assert.equal(angle(180, 400, 'prev'), 90);
  assert.equal(angle(-90, 200, 'next'), -90);
});
test('a short slow pull cancels, a deliberate pull completes, and a flick must lift the page', () => {
  for (const [direction, sign] of [['next', -1], ['prev', 1]]) {
    assert.equal(complete(sign * 20, 0, direction), false);
    assert.equal(complete(sign * 55, 0, direction), true);
    assert.equal(complete(sign * 5, sign * 800, direction), false);
    assert.equal(complete(sign * 20, sign * 800, direction), true);
    assert.equal(complete(sign * 100, -sign * 800, direction), false);
  }
});
test('settling is bounded and takes less time when the destination is close', () => {
  assert.equal(duration(-180, -180), 0.18);
  assert.ok(duration(-160, -180) < duration(-20, -180));
  assert.equal(duration(-90, 0), duration(90, 0));
  assert.ok(duration(0, 180) <= 0.46);
});
