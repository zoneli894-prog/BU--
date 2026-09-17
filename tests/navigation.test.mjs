import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const config = await readFile(
  new URL('../docs/.vitepress/config.mts', import.meta.url),
  'utf8',
);

test('官网导航提供安全的后台管理入口', () => {
  const adminEntry = /\{\s*text:\s*'后台管理',\s*link:\s*'https:\/\/curious-brigadeiros-4f1d1a\.netlify\.app\/admin\/',\s*target:\s*'_blank',\s*rel:\s*'noopener noreferrer',\s*\}/;
  assert.match(config, adminEntry);
});
