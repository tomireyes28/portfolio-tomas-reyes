import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../.next/server/app/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const origin = 'https://portfolio-tomas-reyes.vercel.app';

test('the production HTML exposes the confirmed canonical and horizontal social image', () => {
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*>/)?.[0].match(/href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href, `${origin}/`);
  assert.ok(html.includes(`property="og:image" content="${origin}/opengraph-image`));
  assert.ok(html.includes('property="og:image:width" content="1200"'));
  assert.ok(html.includes('property="og:image:height" content="630"'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  assert.ok(!html.includes('tomasreyes.dev'));
});
test('robots and sitemap use the same production origin', async () => {
  const robots = await readFile(new URL('robots.txt.body', root), 'utf8');
  const sitemap = await readFile(new URL('sitemap.xml.body', root), 'utf8');
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
});
test('the generated social card is a valid 1200 by 630 PNG', async () => {
  const png = await readFile(new URL('opengraph-image.body', root));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
});
test('the server-rendered document retains readable profile and project content', () => {
  for (const text of ['Soy Tomás', 'Plastic Who?', 'MN Agency', 'Therapio', 'Lumi', 'MN Sync', 'Cine Radar', 'Aberturas N&amp;L', 'Simulador de DEA']) {
    assert.ok(html.includes(text), text);
  }
});
