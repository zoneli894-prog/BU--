import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

const html = await readFile(
  new URL('../docs/public/admin/index.html', import.meta.url),
  'utf8',
);

function extractAuthScript() {
  const script = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1])
    .find((source) =>
      source.includes('const identity = window.netlifyIdentity;'),
    );

  assert.ok(script, '应找到登录页的内联认证脚本');
  return script;
}

function createLoginHarness({
  callbackHash = '',
  hasIdentity = true,
  openError,
  signedInUser = null,
} = {}) {
  const elements = {
    'login-button': {
      disabled: false,
      listeners: {},
      textContent: '登录后台',
      addEventListener(type, listener) {
        this.listeners[type] = listener;
      },
    },
    'login-panel': { hidden: false },
    'login-status': { textContent: '' },
  };
  const appendedScripts = [];
  const document = {
    body: {
      appendChild(element) {
        appendedScripts.push(element);
      },
    },
    createElement(tagName) {
      return { async: false, onerror: null, src: '', tagName };
    },
    getElementById(id) {
      return elements[id];
    },
  };
  const handlers = {};
  let currentIdentityUser = signedInUser;
  const identity = hasIdentity
    ? {
        closeCalls: 0,
        initCalls: [],
        openCalls: [],
        close() {
          this.closeCalls += 1;
        },
        currentUser() {
          return currentIdentityUser;
        },
        init(config) {
          this.initCalls.push(config);
        },
        on(event, handler) {
          handlers[event] = handler;
        },
        open(mode) {
          this.openCalls.push(mode);
          if (openError) throw openError;
        },
      }
    : undefined;
  const historyCalls = [];
  const timeouts = [];
  let reloadCalls = 0;
  const window = {
    history: {
      replaceState(...args) {
        historyCalls.push(args);
      },
    },
    location: {
      hash: callbackHash,
      pathname: '/admin/',
      reload() {
        reloadCalls += 1;
      },
      search: '?preview=1',
    },
    netlifyIdentity: identity,
    setTimeout(callback, delay) {
      timeouts.push({ callback, delay });
      return timeouts.length;
    },
  };

  runInNewContext(extractAuthScript(), { document, window });

  return {
    appendedScripts,
    clickLogin() {
      elements['login-button'].listeners.click();
    },
    emitIdentity(event) {
      assert.equal(typeof handlers[event], 'function');
      handlers[event]();
    },
    get reloadCalls() {
      return reloadCalls;
    },
    elements,
    historyCalls,
    identity,
    setSignedInUser(user) {
      currentIdentityUser = user;
    },
    timeouts,
  };
}

test('登录页明确使用受邀的 QQ 邮箱', () => {
  assert.match(html, /使用受邀的 QQ 邮箱/);
  assert.match(
    html,
    /<button id="login-button" class="login-button" type="button">\s*登录后台\s*<\/button>/,
  );
});

test('登录页在折叠帮助前展示三步流程', () => {
  for (const text of [
    '使用受邀的 QQ 邮箱',
    '首次登录设置密码，之后直接输入密码',
    '登录成功后进入内容管理系统',
  ]) {
    assert.match(html, new RegExp(text));
  }
  assert.match(html, /<ol class="login-steps"/);
  const loginButtonPosition = html.indexOf('id="login-button"');
  const loginStatusPosition = html.indexOf('id="login-status"');
  const loginStepsPosition = html.indexOf('<ol class="login-steps"');
  const troubleshootingPosition = html.indexOf(
    '<details class="troubleshooting">',
  );

  assert.ok(loginButtonPosition < loginStatusPosition);
  assert.ok(loginStatusPosition < loginStepsPosition);
  assert.ok(
    loginStepsPosition < troubleshootingPosition,
  );

  const steps = html.match(/<li class="login-step">/g) ?? [];
  assert.equal(steps.length, 3);
  for (const number of ['1', '2', '3']) {
    assert.match(
      html,
      new RegExp(
        `<li class="login-step">\\s*<span class="step-number"[^>]*>${number}<\\/span>`,
      ),
    );
  }
});

test('登录页通过折叠帮助覆盖五类常见问题', () => {
  for (const text of [
    '没收到邀请邮件',
    '忘记密码',
    '提示账号不存在',
    '邮件链接失效',
    '登录成功但后台未加载',
    '联系网站管理员',
  ]) {
    assert.match(html, new RegExp(text));
  }
  assert.match(html, /<details class="troubleshooting">/);
  assert.match(html, /<summary>登录遇到问题？<\/summary>/);
});

test('登录页提供返回官网链接和无障碍状态', () => {
  assert.match(
    html,
    /<a class="home-link" href="https:\/\/zoneli894-prog\.github\.io\/BU--\/">\s*返回 BU 官网\s*<\/a>/,
  );
  assert.match(html, /id="login-status"[^>]*aria-live="polite"/);
});

test('登录页保护响应式、键盘焦点和动效偏好', () => {
  assert.match(
    html,
    /\.login-steps\s*\{[^}]*grid-template-columns:\s*repeat\(3, 1fr\)/,
  );
  assert.match(
    html,
    /@media \(max-width: 640px\)\s*\{[\s\S]*?\.login-steps\s*\{[^}]*grid-template-columns:\s*1fr/,
  );
  assert.match(html, /\.login-button\s*\{[^}]*min-height:\s*48px/);
  assert.match(html, /\.login-button:focus-visible/);
  assert.match(html, /\.login-button:disabled/);
  assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
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

test('登录页处理窗口关闭和脚本加载失败', () => {
  for (const source of [
    'function setButtonLoading(loading',
    'function setStatus(message',
    'identity.on("close"',
    'identity.on("error"',
    'script.onerror = () =>',
    'if (!identity)',
    '重新加载后台',
    'identity?.currentUser()',
  ]) {
    assert.ok(html.includes(source), `登录页应包含 ${source}`);
  }

  assert.match(
    html,
    /script\.onerror = \(\) => \{\s*cmsLoading = false;\s*loginPanel\.hidden = false;\s*setButtonLoading\(false, "重新加载后台"\);[\s\S]*?后台加载失败，请刷新页面后重试；仍失败时请联系网站管理员。/,
  );
  assert.match(
    html,
    /loginButton\.addEventListener\("click", \(\) => \{\s*if \(identity\?\.currentUser\(\)\) \{\s*loadCms\(\);/,
  );
  assert.match(
    html,
    /identity\.on\("error", \(\) => \{\s*setButtonLoading\(false\);\s*setStatus\("登录未完成，请检查邮箱和密码后重试。"\);/,
  );
});

test('未登录点击会打开 Identity 并在关闭窗口后恢复按钮', () => {
  const harness = createLoginHarness();

  harness.clickLogin();
  assert.deepEqual(harness.identity.openCalls, ['login']);
  assert.equal(harness.elements['login-button'].disabled, true);

  harness.emitIdentity('close');
  assert.equal(harness.elements['login-button'].disabled, false);
});

test('Identity 窗口打开失败时恢复按钮并显示错误', () => {
  const harness = createLoginHarness({
    openError: new Error('Identity unavailable'),
  });

  harness.clickLogin();

  assert.equal(harness.elements['login-button'].disabled, false);
  assert.match(
    harness.elements['login-status'].textContent,
    /登录窗口打开失败/,
  );
});

test('缺少 Identity 脚本时安全初始化并显示服务错误', () => {
  let harness;

  assert.doesNotThrow(() => {
    harness = createLoginHarness({ hasIdentity: false });
  });
  assert.match(
    harness.elements['login-status'].textContent,
    /登录服务暂时无法加载/,
  );
});

test('Identity 报错时恢复按钮并显示登录错误', () => {
  const harness = createLoginHarness();
  harness.clickLogin();

  harness.emitIdentity('error');

  assert.equal(harness.elements['login-button'].disabled, false);
  assert.match(harness.elements['login-status'].textContent, /登录未完成/);
});

test('已登录用户只加载一个 CMS 脚本并可从加载失败中恢复重试', () => {
  const harness = createLoginHarness();

  assert.equal(harness.appendedScripts.length, 0);
  harness.setSignedInUser({ email: 'member@qq.com' });
  harness.clickLogin();
  assert.equal(harness.appendedScripts.length, 1);
  assert.equal(harness.elements['login-panel'].hidden, true);

  harness.clickLogin();
  assert.equal(harness.appendedScripts.length, 1);

  const cmsScript = harness.appendedScripts[0];
  assert.equal(
    cmsScript.src,
    'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js',
  );
  cmsScript.onerror();

  assert.equal(harness.elements['login-panel'].hidden, false);
  assert.equal(harness.elements['login-button'].disabled, false);
  assert.equal(
    harness.elements['login-button'].textContent,
    '重新加载后台',
  );
  assert.match(harness.elements['login-status'].textContent, /后台加载失败/);

  harness.clickLogin();
  assert.equal(harness.appendedScripts.length, 2);
});

test('登录事件清理回调地址、关闭窗口并加载 CMS', () => {
  const harness = createLoginHarness({ callbackHash: '#invite_token=secret' });

  harness.emitIdentity('login');

  assert.deepEqual(harness.historyCalls, [
    [null, '', '/admin/?preview=1'],
  ]);
  assert.equal(harness.identity.closeCalls, 1);
  assert.equal(harness.appendedScripts.length, 1);
});

test('登出事件刷新当前页面', () => {
  const harness = createLoginHarness();

  harness.emitIdentity('logout');

  assert.equal(harness.reloadCalls, 1);
});

test('四类认证回调均在 300ms 后打开 Identity', () => {
  for (const token of [
    'invite_token',
    'recovery_token',
    'confirmation_token',
    'email_change_token',
  ]) {
    const harness = createLoginHarness({ callbackHash: `#${token}=secret` });

    assert.equal(harness.timeouts.length, 1, token);
    assert.equal(harness.timeouts[0].delay, 300, token);
    assert.deepEqual(harness.identity.openCalls, [], token);

    harness.timeouts[0].callback();
    assert.deepEqual(harness.identity.openCalls, [undefined], token);
  }
});
