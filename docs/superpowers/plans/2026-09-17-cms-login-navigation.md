# BU CMS Login and Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a discoverable “后台管理” entry to the BU website and deliver a minimal, responsive CMS login page with concise guidance, resilient authentication states, and no change to the existing Netlify Identity/Decap CMS publishing architecture.

**Architecture:** Keep the public-site entry in the existing VitePress navigation configuration and keep the CMS login experience self-contained in `docs/public/admin/index.html`. Verify both surfaces with Node's built-in test runner, then run the complete VitePress build before one PR and one final production deployment.

**Tech Stack:** VitePress 1.6, static HTML/CSS/JavaScript, Netlify Identity Widget, Decap CMS 3, Node.js built-in test runner, GitHub Actions, GitHub Pages, Netlify.

---

## File map

- Modify `docs/.vitepress/config.mts`: add the external “后台管理” navigation item.
- Modify `docs/public/admin/index.html`: own the login-page layout, styles, explanatory content, Identity events, and Decap loading states.
- Modify `tests/admin-login.test.mjs`: protect the login content, accessibility hooks, authentication callbacks, and error handling.
- Create `tests/navigation.test.mjs`: protect the URL and security attributes of the website navigation entry.
- Do not modify `docs/public/admin/config.yml`: content collections and Git Gateway behavior are outside this feature.
- Do not modify `package.json`: the two Node tests can run directly and no dependency is required.

### Task 1: Add and test the website navigation entry

**Files:**
- Create: `tests/navigation.test.mjs`
- Modify: `docs/.vitepress/config.mts:44-64`

- [ ] **Step 1: Write the failing navigation test**

Create `tests/navigation.test.mjs` with:

```js
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
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run:

```bash
node --test tests/navigation.test.mjs
```

Expected: one failing test with `AssertionError` because `config.mts` does not yet contain “后台管理”.

- [ ] **Step 3: Add the VitePress navigation item**

Insert this object immediately after the existing “2048 小游戏” object and before the closing `nav` bracket:

```ts
      // 后台独立托管在 Netlify，新标签页打开以保留官网浏览位置
      {
        text: '后台管理',
        link: 'https://curious-brigadeiros-4f1d1a.netlify.app/admin/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
```

- [ ] **Step 4: Run the navigation test and verify it passes**

Run:

```bash
node --test tests/navigation.test.mjs
```

Expected: `1` test passes and `0` tests fail.

- [ ] **Step 5: Commit the navigation entry**

```bash
git add tests/navigation.test.mjs docs/.vitepress/config.mts
git commit -m "feat: add CMS entry to site navigation"
```

### Task 2: Build the minimal login layout and help content

**Files:**
- Modify: `tests/admin-login.test.mjs`
- Modify: `docs/public/admin/index.html:8-147`

- [ ] **Step 1: Add failing structure and accessibility tests**

Replace the existing first test with this version so the assertion matches the approved concise copy:

```js
test('登录页明确使用受邀的 QQ 邮箱', () => {
  assert.match(html, /使用受邀的 QQ 邮箱/);
  assert.match(html, /登录后台/);
});
```

Then append these tests to `tests/admin-login.test.mjs`:

```js
test('登录页展示三步流程和可折叠帮助', () => {
  for (const text of [
    '使用受邀的 QQ 邮箱',
    '首次登录设置密码，之后直接输入密码',
    '登录成功后进入内容管理系统',
    '登录遇到问题？',
    '联系网站管理员重新邀请',
    '联系网站管理员重新发送',
  ]) {
    assert.match(html, new RegExp(text));
  }

  assert.match(html, /<ol class="login-steps"/);
  assert.match(html, /<details class="troubleshooting">/);
  assert.match(html, /<summary>登录遇到问题？<\/summary>/);
});

test('登录页提供返回官网链接和无障碍状态', () => {
  assert.match(
    html,
    /href="https:\/\/zoneli894-prog\.github\.io\/BU--\/"/,
  );
  assert.match(html, /id="login-status"[^>]*aria-live="polite"/);
  assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
});
```

- [ ] **Step 2: Run the login test and verify the expected failures**

Run:

```bash
node --test tests/admin-login.test.mjs
```

Expected: the existing four tests pass; the two new tests fail because the steps, expandable help, homepage link, and reduced-motion rule do not exist yet.

- [ ] **Step 3: Replace the login page styles**

Replace the current `<style>...</style>` block in `docs/public/admin/index.html` with this complete block:

```html
    <style>
      :root {
        color-scheme: light;
        font-family:
          Inter, "PingFang SC", "Microsoft YaHei", system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #1a2744;
        background: #f7f4ec;
      }

      * {
        box-sizing: border-box;
      }

      body {
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
      }

      button,
      summary,
      a {
        font: inherit;
      }

      .login-page {
        display: grid;
        min-height: 100vh;
        place-items: center;
        padding: 32px 20px;
        background: #f7f4ec;
      }

      .login-page[hidden] {
        display: none;
      }

      .login-card {
        width: min(100%, 520px);
        padding: 40px;
        border: 1px solid rgb(26 39 68 / 12%);
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 14px 36px rgb(26 39 68 / 8%);
      }

      .login-header {
        text-align: center;
      }

      .brand-mark {
        display: grid;
        width: 60px;
        height: 60px;
        margin: 0 auto 18px;
        place-items: center;
        border-radius: 16px;
        background: #1a2744;
        color: #c9a96e;
        font-size: 23px;
        font-weight: 800;
        letter-spacing: 0.04em;
      }

      h1 {
        margin: 0;
        font-size: clamp(24px, 5vw, 31px);
        line-height: 1.25;
      }

      .description {
        margin: 12px 0 24px;
        color: #5b6475;
        line-height: 1.7;
      }

      .login-button {
        width: 100%;
        min-height: 48px;
        border: 0;
        border-radius: 10px;
        background: #1a2744;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        transition:
          transform 160ms ease,
          background-color 160ms ease;
      }

      .login-button:hover:not(:disabled) {
        background: #24365e;
        transform: translateY(-1px);
      }

      .login-button:disabled {
        cursor: wait;
        opacity: 0.72;
      }

      .login-button:focus-visible,
      summary:focus-visible,
      .home-link:focus-visible {
        outline: 3px solid rgb(201 169 110 / 60%);
        outline-offset: 3px;
      }

      .status {
        min-height: 22px;
        margin: 12px 0 0;
        color: #697282;
        font-size: 14px;
        line-height: 1.55;
        text-align: center;
      }

      .login-steps {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0;
        margin: 26px 0 0;
        padding: 24px 0 0;
        border-top: 1px solid rgb(26 39 68 / 10%);
        list-style: none;
      }

      .login-step {
        padding: 0 14px;
        color: #4f596a;
        font-size: 13px;
        line-height: 1.55;
        text-align: center;
      }

      .login-step + .login-step {
        border-left: 1px solid rgb(26 39 68 / 10%);
      }

      .step-number {
        display: grid;
        width: 26px;
        height: 26px;
        margin: 0 auto 9px;
        place-items: center;
        border-radius: 50%;
        background: #f4ead7;
        color: #765a29;
        font-weight: 800;
      }

      .troubleshooting {
        margin-top: 22px;
        border-top: 1px solid rgb(26 39 68 / 10%);
        padding-top: 18px;
        color: #5b6475;
        font-size: 14px;
        line-height: 1.65;
      }

      .troubleshooting summary {
        width: fit-content;
        margin: 0 auto;
        color: #1a2744;
        cursor: pointer;
        font-weight: 700;
      }

      .troubleshooting ul {
        margin: 14px 0 0;
        padding-left: 20px;
        text-align: left;
      }

      .troubleshooting li + li {
        margin-top: 7px;
      }

      .home-link {
        display: block;
        width: fit-content;
        margin: 20px auto 0;
        color: #5b6475;
        font-size: 14px;
        text-underline-offset: 3px;
      }

      .home-link:hover {
        color: #1a2744;
      }

      @media (max-width: 640px) {
        .login-page {
          align-items: start;
          padding: 20px 14px;
        }

        .login-card {
          padding: 30px 22px;
        }

        .login-steps {
          grid-template-columns: 1fr;
          padding-top: 16px;
        }

        .login-step {
          display: grid;
          grid-template-columns: 32px 1fr;
          align-items: center;
          padding: 10px 0;
          text-align: left;
        }

        .login-step + .login-step {
          border-top: 1px solid rgb(26 39 68 / 10%);
          border-left: 0;
        }

        .step-number {
          margin: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .login-button {
          transition: none;
        }

        .login-button:hover:not(:disabled) {
          transform: none;
        }
      }
    </style>
```

- [ ] **Step 4: Replace the visible login-card markup**

Replace the existing `<section class="login-card" ...>...</section>` with:

```html
      <section class="login-card" aria-labelledby="login-title">
        <header class="login-header">
          <div class="brand-mark" aria-hidden="true">BU</div>
          <h1 id="login-title">BU 内容管理后台</h1>
          <p class="description">
            成员请使用受邀邮箱登录。无需注册 GitHub，也不要求使用 Google 邮箱。
          </p>
        </header>

        <button id="login-button" class="login-button" type="button">
          登录后台
        </button>
        <p id="login-status" class="status" aria-live="polite"></p>

        <ol class="login-steps" aria-label="登录流程">
          <li class="login-step">
            <span class="step-number" aria-hidden="true">1</span>
            <span>使用受邀的 QQ 邮箱</span>
          </li>
          <li class="login-step">
            <span class="step-number" aria-hidden="true">2</span>
            <span>首次登录设置密码，之后直接输入密码</span>
          </li>
          <li class="login-step">
            <span class="step-number" aria-hidden="true">3</span>
            <span>登录成功后进入内容管理系统</span>
          </li>
        </ol>

        <details class="troubleshooting">
          <summary>登录遇到问题？</summary>
          <ul>
            <li>没收到邀请邮件：检查垃圾邮件，或联系网站管理员重新邀请。</li>
            <li>忘记密码：在登录窗口中使用密码重置入口。</li>
            <li>提示账号不存在：确认填写的是管理员邀请的邮箱。</li>
            <li>邮件链接失效：联系网站管理员重新发送。</li>
            <li>登录成功但后台未加载：刷新页面；仍失败时联系网站管理员。</li>
          </ul>
        </details>

        <a
          class="home-link"
          href="https://zoneli894-prog.github.io/BU--/"
        >返回 BU 官网</a>
      </section>
```

- [ ] **Step 5: Run the login tests and verify they pass**

Run:

```bash
node --test tests/admin-login.test.mjs
```

Expected: all six tests pass.

- [ ] **Step 6: Commit the layout and help content**

```bash
git add tests/admin-login.test.mjs docs/public/admin/index.html
git commit -m "feat: streamline CMS login guidance"
```

### Task 3: Add resilient authentication and CMS loading states

**Files:**
- Modify: `tests/admin-login.test.mjs`
- Modify: `docs/public/admin/index.html:150-205`

- [ ] **Step 1: Add failing interaction-state tests**

Append this test to `tests/admin-login.test.mjs`:

```js
test('登录页处理窗口关闭和脚本加载失败', () => {
  assert.match(html, /function setButtonLoading\(loading/);
  assert.match(html, /identity\.on\("close"/);
  assert.match(html, /identity\.on\("error"/);
  assert.match(html, /script\.onerror = \(\) =>/);
  assert.match(html, /if \(!identity\)/);
  assert.match(html, /重新加载后台/);
});
```

- [ ] **Step 2: Run the login tests and verify the expected failure**

Run:

```bash
node --test tests/admin-login.test.mjs
```

Expected: the new interaction-state test fails because the current script has no loading helper, close/error listeners, or CMS retry state.

- [ ] **Step 3: Replace the inline authentication script**

Keep the external Identity `<script src="...">` unchanged. Replace only the following inline `<script>...</script>` with:

```html
    <script>
      (() => {
        const identity = window.netlifyIdentity;
        const loginPanel = document.getElementById("login-panel");
        const loginButton = document.getElementById("login-button");
        const loginStatus = document.getElementById("login-status");
        const authCallbackTokens = [
          "invite_token",
          "recovery_token",
          "confirmation_token",
          "email_change_token",
        ];
        const hasAuthCallback = authCallbackTokens.some((token) =>
          window.location.hash.includes(token),
        );
        let cmsLoading = false;

        function setButtonLoading(loading, label = "登录后台") {
          loginButton.disabled = loading;
          loginButton.textContent = loading ? "正在加载…" : label;
        }

        function setStatus(message) {
          loginStatus.textContent = message;
        }

        function loadCms() {
          if (cmsLoading) return;
          cmsLoading = true;
          setButtonLoading(true);
          setStatus("正在进入内容管理系统……");
          loginPanel.hidden = true;

          const script = document.createElement("script");
          script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
          script.async = true;
          script.onerror = () => {
            cmsLoading = false;
            loginPanel.hidden = false;
            setButtonLoading(false, "重新加载后台");
            setStatus("后台加载失败，请刷新页面后重试；仍失败时请联系网站管理员。");
          };
          document.body.appendChild(script);
        }

        function openIdentity(mode) {
          if (!identity) {
            setButtonLoading(false);
            setStatus("登录服务暂时无法加载，请刷新页面后重试。");
            return;
          }

          setButtonLoading(true);
          setStatus("正在打开登录窗口……");

          try {
            identity.open(mode);
          } catch {
            setButtonLoading(false);
            setStatus("登录窗口打开失败，请刷新页面后重试。");
          }
        }

        loginButton.addEventListener("click", () => {
          if (identity?.currentUser()) {
            loadCms();
          } else {
            openIdentity("login");
          }
        });

        if (!identity) {
          setStatus("登录服务暂时无法加载，请刷新页面后重试。");
          return;
        }

        identity.init({
          APIUrl:
            "https://curious-brigadeiros-4f1d1a.netlify.app/.netlify/identity",
        });

        identity.on("open", () => {
          setStatus("请在登录窗口中完成验证。");
        });

        identity.on("close", () => {
          if (!cmsLoading) {
            setButtonLoading(false);
            setStatus("");
          }
        });

        identity.on("error", () => {
          setButtonLoading(false);
          setStatus("登录未完成，请检查邮箱和密码后重试。");
        });

        identity.on("login", () => {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
          identity.close();
          loadCms();
        });

        identity.on("logout", () => window.location.reload());

        if (hasAuthCallback) {
          setStatus("正在验证邀请或账号信息，请稍候……");
          window.setTimeout(() => openIdentity(), 300);
        } else if (identity.currentUser()) {
          loadCms();
        }
      })();
    </script>
```

- [ ] **Step 4: Run all static tests**

Run:

```bash
node --test tests/admin-login.test.mjs tests/navigation.test.mjs
```

Expected: all tests pass and the summary reports `0` failures.

- [ ] **Step 5: Commit authentication state handling**

```bash
git add tests/admin-login.test.mjs docs/public/admin/index.html
git commit -m "fix: handle CMS login loading failures"
```

### Task 4: Verify build quality and responsive behavior

**Files:**
- Verify: `docs/public/admin/index.html`
- Verify: `docs/.vitepress/config.mts`
- Verify: `docs/.vitepress/dist/admin/index.html`

- [ ] **Step 1: Run whitespace and conflict checks**

Run:

```bash
git diff --check origin/main...HEAD
rg -n "^(<<<<<<<|=======|>>>>>>>)" docs tests
```

Expected: both commands produce no error; the conflict-marker search produces no matches.

- [ ] **Step 2: Run the complete automated test set**

Run:

```bash
node --test tests/*.test.mjs
```

Expected: every test passes with `0` failures.

- [ ] **Step 3: Build the production website**

Run:

```bash
npm run build
```

Expected: VitePress exits with status `0` and reports a successful build. Warnings already present on `origin/main` may be recorded, but no new error is acceptable.

- [ ] **Step 4: Verify the built admin artifact**

Run:

```bash
test -f docs/.vitepress/dist/admin/index.html
rg -n "登录遇到问题|返回 BU 官网|重新加载后台" docs/.vitepress/dist/admin/index.html
```

Expected: the built file exists and all three phrases are found.

- [ ] **Step 5: Perform responsive visual checks locally**

Start the preview:

```bash
npm run dev -- --host 127.0.0.1
```

Inspect `/BU--/` and `/BU--/admin/` at approximately `1440×900`, `390×844`, and `320×700`. Confirm:

- “后台管理” is the rightmost desktop item and appears in the mobile menu.
- The login page has no horizontal scrolling or clipped text.
- The three steps are horizontal on desktop and vertical on mobile.
- “登录遇到问题？” opens and closes by mouse and keyboard.
- The login button and all links show a visible keyboard focus ring.
- Reduced-motion emulation removes the button translation.

Stop the local preview with `Ctrl+C` after inspection.

- [ ] **Step 6: Record the verification state**

Run:

```bash
git status --short
git log --oneline origin/main..HEAD
```

Expected: only intended source, test, spec, and plan changes are committed; generated `docs/.vitepress/dist` files are not staged.

### Task 5: Create one PR and perform the final controlled deployment

**Files:**
- No additional source files.
- Remote actions: GitHub branch/PR, GitHub Actions, Netlify production deploy.

- [ ] **Step 1: Confirm Netlify will not build a feature-branch preview**

Before pushing, inspect the Netlify build configuration. Deploy previews must be disabled, or the `codex/cms-login-nav-design` branch must be ignored, so the feature-branch push does not consume a deployment build. Do not change Identity or Git Gateway settings.

Expected: only the eventual `main` merge can trigger the one final Netlify production build.

- [ ] **Step 2: Push the completed branch once**

```bash
git push -u origin codex/cms-login-nav-design
```

Expected: the remote branch is created without a Netlify preview build.

- [ ] **Step 3: Create the pull request**

Use this title:

```text
feat: improve CMS login and add navigation entry
```

Use this body:

```markdown
## Summary

- add a top-navigation entry for the BU content management system
- simplify the CMS login page and add a three-step member guide
- add expandable troubleshooting, loading states, and script-failure recovery
- preserve the existing Netlify Identity and Decap CMS authentication flow

## Verification

- `node --test tests/*.test.mjs`
- `npm run build`
- desktop and mobile responsive checks
```

Expected: the PR diff contains only the design/plan documents, `config.mts`, `admin/index.html`, and the two test files.

- [ ] **Step 4: Review and squash-merge once checks pass**

Review the PR diff for secrets, unrelated files, and changes to `docs/public/admin/config.yml`. Squash-merge only when the local tests, local production build, and any repository checks pass.

Expected: `main` advances by one squash commit and triggers one GitHub Pages deployment plus one final Netlify production deployment.

- [ ] **Step 5: Verify production without changing settings**

Check:

- `https://zoneli894-prog.github.io/BU--/` shows the new navigation entry.
- `https://curious-brigadeiros-4f1d1a.netlify.app/admin/` shows the new login page.
- The real invited QQ account can log in and reach Decap CMS.
- Opening and closing the login dialog restores the login button.
- “返回 BU 官网” returns to GitHub Pages.

Expected: all checks pass. If login fails, keep Netlify builds enabled while diagnosing; do not spend another deploy until the cause is identified locally or in Identity settings.

- [ ] **Step 6: Stop Netlify automatic builds after login succeeds**

After the user confirms the real account reached Decap CMS, disable Netlify automatic builds. Keep Netlify Identity and Git Gateway enabled.

Expected: future CMS content commits continue through Git Gateway to GitHub, GitHub Actions publishes the website, and Netlify no longer spends credits on repository builds.

## User checkpoints

The site owner is needed only at these points:

1. Approve the PR merge if repository policy requires owner approval.
2. Perform or observe one real QQ-email login because credentials must not be shared with the implementer.
3. Confirm that the CMS opens successfully before Netlify automatic builds are disabled.
4. Authorize the Netlify build-setting change at the moment it is made.
