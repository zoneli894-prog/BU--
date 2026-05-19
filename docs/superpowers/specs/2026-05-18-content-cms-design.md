# BU 网站内容管理与动态化演进——设计规格

> 状态：待审批 | 日期：2026-05-18

## 目标

让具有仓库权限的成员能够在不修改源代码的情况下，通过网页后台编辑所有栏目的内容（文章、新闻、成员、历史沿革、组织架构、首页动态），并为未来向动态 Web 应用演进预留架构空间。

## 架构总览

分三阶段演进，每阶段投入不浪费：

```
Phase 1（当前 → 近端）    Phase 2（中期）           Phase 3（远期）
─────────────────────    ───────────────          ───────────────
VitePress +              VitePress +              Nuxt 3 +
Decap CMS +              Strapi +                 Strapi +
Markdown 数据层           Supabase Auth +          Supabase +
GitHub Pages             GitHub Pages             Vercel/Railway

数据层：Markdown(.md) →  数据层：Strapi CMS   →   数据层：Strapi（不变）
认证：Netlify Identity →  认证：Supabase Auth  →   认证：Supabase Auth（不变）
部署：GitHub Pages     →  部署：GitHub Pages   →   部署：Vercel/Railway
```

## Phase 1：数据解耦 + Decap CMS

### 数据与视图解耦

将当前硬编码在 Vue 组件中的数据剥离到独立的 Markdown 文件中，每个栏目建立数据集合：

**时间轴 (`docs/timeline/*.md`)**
```yaml
---
year: 2018
title: 创始成立
order: 1
---
详细描述文本...
```

**组织架构 (`docs/org/positions/*.md`)**
```yaml
---
name: 张三
role: 主席
department: 主席团
parent: null
order: 1
---
个人职责描述...
```

**成员 (`docs/members/*.md`)** — 已有此结构，保持

**文章 (`docs/articles/*.md`)** — 已有此结构，保持

**新闻 (`docs/news/*.md`)** — 已有此结构，保持

**首页动态 (`docs/home-updates/*.md`)**
```yaml
---
date: 2026-05-01
title: 春季团建圆满结束
link: /news/spring-team-building-2026
---
```

### Vue 组件改造

- `Timeline.vue` — 从 `import` 硬编码节点改为读取 `docs/timeline/` 下的所有 `.md` 文件
- `OrgChart.vue` — 从硬编码改为读取 `docs/org/positions/` 下的 `.md` 文件，按 `parent` 字段构建树
- `Home.vue` — 动态列表部分改为读取 `docs/home-updates/`
- `MemberGrid.vue`、`ArticleList.vue` — 已从页面数据读取，保持

### Decap CMS 集成

- 放置 `docs/public/admin/index.html` + `docs/public/admin/config.yml`
- 配置 6 个 Collections（timeline、org、members、articles、news、homeUpdates）
- 认证：Netlify Identity + Git Gateway（免费额度 50 用户）
- `deploy.yml` 保持不变（push main 触发构建）

### 边界与限制

- CMS 不能编辑 Vue 组件模板（页面布局和样式不变）
- 成员编辑后需等 1-3 分钟构建部署
- 每个编辑者需 GitHub 账号 + 仓库写入权限
- 图片上传进入 Git 仓库，需配合压缩规范

## Phase 2：Strapi + Supabase 混合方案

### 目标

- 编辑体验升级为真正的 CMS 后台（所见即所得）
- 取消 GitHub 账号门槛，邮箱+密码即可登录
- 添加用户系统和评论功能
- 保留 GitHub Pages 部署和静态页面性能

### 组件架构

```
┌─────────────────────────────────────────┐
│              浏览器                      │
│  ┌──────────────────────────────────┐   │
│  │     VitePress 静态页面             │   │
│  │  ┌─────────┐  ┌──────────────┐   │   │
│  │  │ 内容组件 │  │ 动态组件      │   │   │
│  │  │(构建时)  │  │(客户端 fetch) │   │   │
│  │  └────┬────┘  └──────┬───────┘   │   │
│  └───────┼──────────────┼───────────┘   │
└──────────┼──────────────┼───────────────┘
           │              │
    ┌──────▼──────┐  ┌───▼────────┐
    │  Strapi CMS │  │  Supabase  │
    │ (内容 API)   │  │ (Auth+评论) │
    └─────────────┘  └────────────┘
```

### 核心原则

**内容走构建时，交互走客户端。**

- VitePress 构建时（`buildEnd` 钩子）从 Strapi API 拉取内容，生成静态页面
- 登录弹窗、评论组件通过 Supabase JS SDK 在客户端直连，不经过构建管道
- 内容编辑在 Strapi 后台即时生效，发布触发 GitHub Actions 重新构建

### 新增基础设施

- Strapi 实例部署（Railway 免费额度或自建 $5/月 VPS）
- Supabase 项目（免费额度 500MB 数据库 + 50k 月活用户）
- GitHub Actions 增加 Strapi webhook 触发
- 新增 Vue 组件：`LoginModal.vue`、`CommentSection.vue`

### 从 Phase 1 迁移

- Markdown 文件内容导入 Strapi（批量迁移脚本）
- 删除 `docs/public/admin/`（移除 Decap CMS）
- Vue 组件数据读取路径改为构建时 API 调用
- Netlify Identity 移除（被 Supabase Auth 替代）

## Phase 3：Nuxt 3 全栈迁移

### 目标

- 支持 SSR/SSG 混合渲染
- 添加成员协作空间、实时通知、活动报名等 Web 应用功能
- 保持 Strapi + Supabase 不变

### 框架切换

- VitePress → Nuxt 3 Content 模块
- Vue 组件直接复用（同 Vue 3 生态）
- 部署：GitHub Pages → Vercel（免费额度）或 Railway
- 新增 API Routes 处理服务端逻辑

### 不变的核心

- Strapi CMS（API 接口不变）
- Supabase（Auth + 数据库 schema 不变）
- 品牌色系、设计规范不变

### 从 Phase 2 迁移

- Vue 组件从 VitePress 主题目录复制到 Nuxt 3 `components/`
- 路由配置从 `config.mts` 迁移到 Nuxt 3 `pages/` 目录
- Markdown 内容已在 Strapi 中，无需迁移
- GitHub Actions 部署流程替换为 Vercel 自动部署

## 关键决策记录

| 决策 | 选择 | 原因 |
|---|---|---|
| Phase 1 CMS 工具 | Decap CMS | 对 VitePress 侵入最小，开源，社区活跃 |
| Phase 2 CMS | Strapi | 标准 REST/GraphQL API，自带后台，开源 |
| Phase 2 认证 | Supabase Auth | 独立于前端框架，Free Tier 充足够用 |
| Phase 3 框架 | Nuxt 3 | 同 Vue 生态，组件复用率高 |
| 托管策略 | 优先免费额度 | 每个服务都选有足够免费额度的平台 |

## 风险与缓解

| 风险 | 缓解 |
|---|---|
| Decap CMS 维护停滞 | 数据在 Markdown 中，随时可切换工具 |
| Strapi 免费托管不稳定 | 数据可导出，支持自建 VPS |
| Phase 2→3 迁移成本 | 共用 Strapi + Supabase，仅换前端框架 |
| 非技术成员上手难 | Phase 2 的 Strapi 后台体验远优于 Phase 1 的 Decap CMS |
