import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(
  new URL('../docs/public/admin/index.html', import.meta.url),
  'utf8',
);

test('登录页明确使用个人 QQ 邮箱', () => {
  assert.match(html, /个人 QQ 邮箱/);
  assert.match(html, /登录后台/);
  assert.match(html, /首次使用请打开邀请邮件设置密码/);
  assert.match(html, /未收到邮件请检查垃圾箱/);
});

test('登录页处理全部 Identity 回调令牌', () => {
  for (const token of [
    'invite_token',
    'recovery_token',
    'confirmation_token',
    'email_change_token',
  ]) {
    assert.match(html, new RegExp(token));
  }
});

test('登录页保留跨域 Identity API 地址', () => {
  assert.match(
    html,
    /https:\/\/curious-brigadeiros-4f1d1a\.netlify\.app\/\.netlify\/identity/,
  );
});

test('登录页不再显示旧的强制登录文案', () => {
  assert.doesNotMatch(html, /强制登录/);
});
