# BU 网站改造——进度交接文档

> 日期：2026-05-18
> 提交人：Claude（前端开发专家）
> 交接给：仓库所有者（`zoneli894-prog`）

---

## 一、改造目标

让团队内有权限的成员能够**不修改源代码**、**不需要 GitHub 账号**，通过网页后台直接编辑 BU 网站内容（文章、新闻、成员信息、时间轴、组织架构、首页轮播等）。

改造分三阶段演进：

```
Phase 1（当前）：数据解耦 + Decap CMS + Netlify Identity（无服务器、不花钱）
Phase 2（未来）：Strapi + Supabase（更好的编辑体验、即时发布）
Phase 3（未来）：Nuxt 3（全栈 Web 应用）
```

**当前进度：Phase 1 已完成约 80%，还剩 Netlify 账号配置需要仓库所有者操作。**

---

## 二、已完成的工作

### 2.1 新文件

| 文件 | 说明 |
|---|---|
| `docs/data/timeline.json` | 时间轴 8 个节点（2018-2026），从 Timeline.vue 提取 |
| `docs/data/orgchart.json` | 组织架构数据（主席团→秘书处→5部门→顾问），从 OrgChart.vue 提取 |
| `docs/data/home-slides.json` | 首页轮播 5 张幻灯片，从 Home.vue 提取 |
| `docs/data/home-news.json` | 首页最新动态 3 条，从 Home.vue 提取 |
| `docs/public/admin/index.html` | Decap CMS 后台入口页面 |
| `docs/public/admin/config.yml` | Decap CMS 配置，6 个内容集合（timeline/orgchart/home/members/articles/news） |
| `docs/superpowers/specs/2026-05-18-content-cms-design.md` | 完整设计文档 |
| `docs/superpowers/plans/2026-05-18-content-cms-plan.md` | 完整实施计划 |

### 2.2 已修改的文件

| 文件 | 改动内容 |
|---|---|
| `docs/.vitepress/theme/Timeline.vue` | 删除硬编码的 events 数组，改为 import `timeline.json` → `events = timelineData.nodes` |
| `docs/.vitepress/theme/OrgChart.vue` | 删除硬编码 departments 数组，改为 import `orgchart.json`；模板中 6 处中文文本改为 `{{ }}` 变量引用 |
| `docs/.vitepress/theme/Home.vue` | 删除硬编码 slides 和 latestNews 数组，改为 import `home-slides.json` + `home-news.json` |

### 2.3 改动原则

- **不改逻辑**：所有改动仅为"数据从组件内硬编码改为外部 JSON 文件 import"，IntersectionObserver、动画、Canvas 粒子、轮播逻辑等全部保持不变
- **不改依赖**：`package.json` 不变，未新增任何 npm 包
- **不改部署**：`.github/workflows/deploy.yml` 不变

---

## 三、待完成的工作

### 3.1 仓库所有者操作：Netlify 配置（约 10 分钟）

这一步需要**仓库所有者（zoneli894-prog）** 操作，因为 Netlify 需要授权访问该组织下的仓库。

1. **注册 Netlify**：打开 [app.netlify.com](https://app.netlify.com)，用 GitHub 账号注册，选 Personal Project

2. **导入仓库**：点击 "Add new site" → "Import an existing project" → GitHub → 选择 `zoneli894-prog/BU--`
   - 如果出现 "no repositories found"：点击 "Configure the Netlify app on GitHub"，授权 Netlify 访问 `zoneli894-prog` 组织
   - 在 Build settings 中，将 **Build command** 和 **Publish directory** **清空**（部署由现有的 GitHub Actions 负责，不需要 Netlify 构建）

3. **启用 Identity**：进入 Site settings → Identity → 点 "Enable Identity"，Registration 选 "Invite only"

4. **启用 Git Gateway**：进入 Site settings → Identity → Services → 点 "Enable Git Gateway"，授权 Netlify 访问 `zoneli894-prog/BU--`

5. **添加协作者**：进入 Site settings → Site members → Add a member → 输入其他需要管理 CMS 权限的成员邮箱（必须是仓库的 GitHub Collaborator，或由你手动添加）

### 3.2 端到端验证

Netlify 配置完成后，建议验证：

1. 在本机 `npm run dev`，访问 `http://localhost:4173/BU--/admin/` — 在本地 CMS 界面可能无法加载（因为 Netlify Identity 本地不支持），这是正常的
2. 将代码 push 到 GitHub
3. 等 GitHub Actions 构建部署完成（约 1-2 分钟）
4. 访问 `https://zoneli894-prog.github.io/BU--/admin/`
5. 用 Netlify Identity 邀请的邮箱登录
6. 编辑一条内容（如修改时间轴某个节点的描述）→ 点发布
7. 等待 GitHub Actions 重新构建 → 确认网站已更新

---

## 四、注意事项

### 4.1 非技术人员编辑内容

调用仓库所有者配置 Netlify 后，普通成员可以用**邮箱**登录 CMS 后台（无需 GitHub 账号），修改内容点发布后需等待 1-2 分钟构建时间。如果对编辑器体验要求较高（想即时发布），建议后期进入 Phase 2（Strapi 方案）。

### 4.2 CMS 覆盖范围

Decap CMS 后台可以编辑的内容类型：

| 集合 | 格式 | 可编辑字段 |
|---|---|---|
| 时间轴 | JSON | 年份、标题、描述 |
| 组织架构 | JSON | 部门名称、描述、结构关系 |
| 首页轮播 | JSON | 标签、标题、副标题 |
| 首页动态 | JSON | 标题、日期、标签、链接 |
| 成员介绍 | Markdown | 姓名、角色、格言、正文 |
| 成员文章 | Markdown | 标题、作者、分类、正文 |
| 新闻动态 | Markdown | 标题、日期、正文 |

**不在 CMS 范围内**：首页 Hero 标题（"Brother Union"）、愿景文案、快速链接、统计数字（stats）——这些与页面设计绑定，修改需要编辑 Vue 组件代码。

### 4.3 安全

- CMS 后台路径：`/BU--/admin/`，无前端导航入口，仅知道 URL 的人可访问
- 编辑权限通过 Netlify Identity 的 "Invite only" 模式控制，只有被邀请的邮箱可以登录
- 编辑操作直接向 GitHub 仓库提交代码，请在 `.gitignore` 中确认不需要忽略 JSON 文件
- 图片上传会进入 Git 仓库的 `docs/public/images/`，建议定期清理大文件

---

## 五、修改过的文件列表

### 新增（建议 git add）
```
docs/data/timeline.json
docs/data/orgchart.json
docs/data/home-slides.json
docs/data/home-news.json
docs/public/admin/index.html
docs/public/admin/config.yml
docs/superpowers/specs/2026-05-18-content-cms-design.md
docs/superpowers/plans/2026-05-18-content-cms-plan.md
```

### 修改（建议 git add）
```
docs/.vitepress/theme/Timeline.vue
docs/.vitepress/theme/OrgChart.vue
docs/.vitepress/theme/Home.vue
```

### git status 中其他的修改文件

执行 `git status` 时可能会出现大量红字显示的 modified 文件（如 `deploy.yml`、`.gitignore`、`CLAUDE.md`、`index.ts`、`custom.css`、所有成员 `.md` 文件等）。这些是**本会话之前就有的未提交换改**，与本次 CMS 改造无关。建议：

```bash
git add docs/data/ docs/public/admin/ docs/superpowers/ docs/.vitepress/theme/Timeline.vue docs/.vitepress/theme/OrgChart.vue docs/.vitepress/theme/Home.vue
git commit -m "feat: Phase 1 content CMS - data decoupling + Decap CMS admin"
```

其余文件由仓库所有者自行决定是否一并提交或单独处理。

---

## 六、重要设计决策记录

| 决策 | 选择 | 理由 |
|---|---|---|
| CMS 工具 | Decap CMS（非 TinaCMS） | 对 VitePress 侵入最小，SSG 无关，文件式安装 |
| 认证方式 | Netlify Identity + Git Gateway | 成员无需 GitHub 账号，用邮箱即可登录 |
| 数据格式 | JSON（非 Markdown） | 时间轴/架构/轮播等结构化数据用 JSON 更自然，Decap CMS 支持 File Collection 编辑 |
| Vue 组件改造 | 仅改数据读取方式 | 不改逻辑、不重构、不改样式，风险最低 |
| 不覆盖的内容 | Hero 标题、愿景文案、快速链接 | 这些与页面设计绑定，属于"设计规范"而非"内容" |

---

如有问题，可以直接联系我继续协助。
