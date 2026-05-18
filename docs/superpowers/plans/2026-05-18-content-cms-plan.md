# BU 网站内容 CMIS 演进实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 BU 网站从"数据硬编码在 Vue 组件中"改造为"数据外置 + Decap CMS 可视编辑"，为后续 Phase 2/3 的动态化演进留好架构。

**Architecture:** 数据从 Vue 组件中剥离到独立的 JSON 数据文件中，Vue 组件改为纯渲染层（import JSON → render）。Decap CMS 以 File Collection 方式编辑这些 JSON 文件，Netlify Identity + Git Gateway 处理认证与提交。Articles/News/Members 保持 Markdown 格式，由 Decap CMS Folder Collection 管理。

**Tech Stack:** VitePress 1.6.x + Vue 3.5.x, Decap CMS 3.x, Netlify Identity + Git Gateway, GitHub Pages, GitHub Actions

---

## Phase 1：数据解耦 + Decap CMS 集成

### Phase 1 文件结构变更

```
docs/
├── data/                          # 新增：外置数据文件，供 Vue 组件 import
│   ├── timeline.json              # 新建：时间轴 8 个节点数据
│   ├── orgchart.json              # 新建：组织架构层级数据
│   ├── home-slides.json           # 新建：首页轮播 5 张幻灯片
│   └── home-news.json             # 新建：首页最新动态 3 条
├── public/
│   ├── logo.svg                   # 已有
│   └── admin/                     # 新建：Decap CMS 后台
│       ├── index.html             # 新建：CMS 入口
│       └── config.yml             # 新建：CMS 配置（Collections定义）
├── .vitepress/theme/
│   ├── Timeline.vue               # 修改：import timeline.json 替代硬编码
│   ├── OrgChart.vue               # 修改：import orgchart.json 替代硬编码
│   └── Home.vue                   # 修改：import home-*.json 替代硬编码
```

**「首页动态」部分不是全部可编辑**：首页 Hero 标题（Brother Union）、愿景文案、快速链接（5 个图标+标题+描述）属于"页面布局与品牌文案"的范畴，和页面设计强绑定。Phase 1 只将轮播幻灯片（slides）和最新动态卡片（latestNews）外置为可编辑数据，保持 CMS 编辑范围聚焦于"日常更新型内容"。

---

### Task 1: 创建外置数据文件目录

**Files:**
- Create: `docs/data/timeline.json`
- Create: `docs/data/orgchart.json`
- Create: `docs/data/home-slides.json`
- Create: `docs/data/home-news.json`

- [ ] **Step 1: 创建 `docs/data/` 目录**

```bash
mkdir -p docs/data
```

- [ ] **Step 2: 写入 `docs/data/timeline.json`** — 从 Timeline.vue 第 22-63 行提取 events 数组

```json
[
  { "year": "2018", "title": "成员初聚", "desc": "BU现有的主要成员由小升初进入同一学校，开始了初步认识和交流，初步奠定了未来合作的基础。" },
  { "year": "2019-2020", "title": "进一步发展", "desc": "BU的首批成员之间逐步建立了紧密的联系，合作不断深化，进一步奠定了组织建立的基础。" },
  { "year": "2021", "title": "组织成立", "desc": "BU的前身姐妹帮短暂地存在了一段时间，后因遭受cys的定点打击导致覆灭。但成员不久在吸取了经验教训后，重新聚集并正式成立了BU。" },
  { "year": "2022", "title": "成员突破 50 人", "desc": "BU的第二批成员通过推荐制稳步扩展，成员总数突破 50 人，涵盖多个领域和专业方向。" },
  { "year": "2023", "title": "数字化转型", "desc": "启动内部知识管理系统建设，推动文件归档、流程标准化和线上协作工具的全面部署。" },
  { "year": "2024", "title": "五周年庆典", "desc": "举办成立五周年系列纪念活动，回顾发展历程，表彰杰出贡献者，并发布新版组织章程。" },
  { "year": "2025", "title": "战略升级", "desc": "核心层完成战略规划，明确未来三年发展方向，在成员培养和社会公益方面设立新目标。" },
  { "year": "2026", "title": "官方网站上线", "desc": "BU 官方网站正式上线，实现了信息透明化和对外展示的新里程碑。" }
]
```

- [ ] **Step 3: 写入 `docs/data/orgchart.json`** — 从 OrgChart.vue 第 22-49 行提取

```json
{
  "topLevel": {
    "title": "主席团",
    "desc": "最高决策与监督机构"
  },
  "secondLevel": {
    "title": "秘书处",
    "desc": "日常运营与协调中枢"
  },
  "departments": [
    { "name": "宣传部", "desc": "品牌建设、内容创作与传播" },
    { "name": "外联部", "desc": "对外合作、关系维护与拓展" },
    { "name": "活动部", "desc": "活动策划、组织执行与复盘" },
    { "name": "技术部", "desc": "技术支撑、系统运维与开发" },
    { "name": "财务部", "desc": "经费管理、预算编制与审计" }
  ],
  "advisory": {
    "title": "顾问委员会",
    "desc": "由创始人及名誉成员组成，提供战略咨询"
  }
}
```

- [ ] **Step 4: 写入 `docs/data/home-slides.json`** — 从 Home.vue 第 209-215 行提取 slides 数组

```json
[
  { "badge": "2026 · 春", "bg": "linear-gradient(135deg, #1a2744 0%, #2a3d66 50%, #1a2744 100%)", "title": "2026 春季团建", "subtitle": "同行·共进 — 42人共赴城郊拓展之旅" },
  { "badge": "里程碑", "bg": "linear-gradient(135deg, #0f1a2e 0%, #1a3a5c 50%, #0f1a2e 100%)", "title": "五周年庆典", "subtitle": "回望来路，展望未来" },
  { "badge": "2025", "bg": "linear-gradient(135deg, #1a2744 0%, #3a4d76 50%, #1a2744 100%)", "title": "战略升级 2025", "subtitle": "聚焦成员培养与社会公益" },
  { "badge": "论坛", "bg": "linear-gradient(135deg, #0f1a2e 0%, #2a4a6e 50%, #0f1a2e 100%)", "title": "青年之声论坛", "subtitle": "与三所高校共话成长" },
  { "badge": "数字化", "bg": "linear-gradient(135deg, #1a2744 0%, #1a3050 50%, #1a2744 100%)", "title": "数字化转型", "subtitle": "知识管理与协作工具全面升级" }
]
```

- [ ] **Step 5: 写入 `docs/data/home-news.json`** — 从 Home.vue 第 188-207 行提取 latestNews 数组

```json
[
  { "tag": "活动总结", "title": "2026年度春季团建活动圆满举办", "date": "2026.04.20", "link": "/BU--/news/spring-team-building-2026" },
  { "tag": "成员专访", "title": "对话核心层：BU 未来三年的发展方向", "date": "2026.03.15", "link": "/BU--/news/core-interview-2026" },
  { "tag": "内部通告", "title": "2026年各部门负责人换届通知", "date": "2026.02.01", "link": "/BU--/news/leadership-change-2026" }
]
```

> **注意 home-news.json 中 link 已包含 `/BU--` base 前缀**，因为此 JSON 是数据源而非页面路由，链接引用的是最终部署路径。

- [ ] **Step 6: 验证 JSON 文件语法**

```bash
node -e "JSON.parse(require('fs').readFileSync('docs/data/timeline.json','utf8')); console.log('timeline OK')"
node -e "JSON.parse(require('fs').readFileSync('docs/data/orgchart.json','utf8')); console.log('orgchart OK')"
node -e "JSON.parse(require('fs').readFileSync('docs/data/home-slides.json','utf8')); console.log('slides OK')"
node -e "JSON.parse(require('fs').readFileSync('docs/data/home-news.json','utf8')); console.log('news OK')"
```

- [ ] **Step 7: Commit**

```bash
git add docs/data/
git commit -m "feat: extract hardcoded data from Vue components to JSON data files"
```

---

### Task 2: 重构 Timeline.vue 读取外置数据

**Files:**
- Modify: `docs/.vitepress/theme/Timeline.vue`

- [ ] **Step 1: 替换 `<script setup>` 中的数据定义**

将第 22-63 行的 `const events = [...]` 替换为从 JSON 导入：

```js
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import timelineData from '../../data/timeline.json'

const events = timelineData
// ... 保持原有的 visibleItems、observer 逻辑不变
```

完整替换：删除原有的整个 `events` 数组字面量（22-63 行），在 import 语句后新增 `const events = timelineData`。模板和其他逻辑完全不变。

- [ ] **Step 2: 验证 dev server 正常**

```bash
npm run dev
```

打开 `http://localhost:4173/history/`，确认时间轴 8 个节点正常渲染、滚动淡入动画正常。

- [ ] **Step 3: 验证 build 正常**

```bash
npm run build
```

确保无报错。

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/theme/Timeline.vue
git commit -m "refactor: Timeline.vue reads data from timeline.json instead of hardcoded array"
```

---

### Task 3: 重构 OrgChart.vue 读取外置数据

**Files:**
- Modify: `docs/.vitepress/theme/OrgChart.vue`

- [ ] **Step 1: 替换 `<script setup>` 中的数据定义**

将第 43-49 行的 `const departments = [...]` 替换为：

```js
<script setup>
import orgData from '../../data/orgchart.json'

const topLevel = orgData.topLevel
const secondLevel = orgData.secondLevel
const departments = orgData.departments
const advisory = orgData.advisory
```

- [ ] **Step 2: 更新模板使用数据变量**

将模板中硬编码的"主席团"和"秘书处"文本替换为变量引用：

```vue
<template>
  <div class="org-tree">
    <!-- Top Level -->
    <div class="org-col">
      <div class="org-node root">
        <p class="org-node-title">{{ topLevel.title }}</p>
        <p class="org-node-desc">{{ topLevel.desc }}</p>
      </div>
      <div class="org-connector"></div>
    </div>

    <!-- Second Level: Secretary -->
    <div class="org-col">
      <div class="org-node">
        <p class="org-node-title">{{ secondLevel.title }}</p>
        <p class="org-node-desc">{{ secondLevel.desc }}</p>
      </div>
      <div class="org-connector"></div>
    </div>

    <!-- Third Level: Departments -->
    <div class="org-branch">
      <div class="org-col" v-for="dept in departments" :key="dept.name">
        <div class="org-connector"></div>
        <div class="org-node org-dept-node">
          <p class="org-node-title">{{ dept.name }}</p>
          <p class="org-node-desc">{{ dept.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Advisory -->
    <div class="org-col" style="margin-top: 2rem">
      <div class="org-node" style="border-style: dashed">
        <p class="org-node-title">{{ advisory.title }}</p>
        <p class="org-node-desc">{{ advisory.desc }}</p>
      </div>
    </div>
  </div>
</template>
```

- [ ] **Step 3: 验证 dev 和 build**

```bash
npm run dev    # 确认架构页正常
npm run build  # 确认无报错
```

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/theme/OrgChart.vue
git commit -m "refactor: OrgChart.vue reads data from orgchart.json"
```

---

### Task 4: 重构 Home.vue 读取外置数据

**Files:**
- Modify: `docs/.vitepress/theme/Home.vue`

- [ ] **Step 1: 替换 slides 数组**

在 `<script setup>` 中新增导入并替换第 209-215 行：

```js
import slidesData from '../../data/home-slides.json'
import newsData from '../../data/home-news.json'

const slides = slidesData
const latestNews = newsData.map(item => ({
  ...item,
  link: withBase(item.link)
}))
```

> 注意：`latestNews` 的 link 仍需通过 `withBase()` 包裹以支持 `/BU--` base 路径。

- [ ] **Step 2: 删除原有的 `const slides = [...]` 和 `const latestNews = [...]`**

删除第 209-215 行的 slides 数组和第 188-207 行的 latestNews 数组。

- [ ] **Step 3: 验证 dev 和 build**

```bash
npm run dev    # 确认首页轮播、动态渲染正常
npm run build  # 确认无报错
```

- [ ] **Step 4: Commit**

```bash
git add docs/.vitepress/theme/Home.vue
git commit -m "refactor: Home.vue reads slides and news from JSON data files"
```

---

### Task 5: 创建 Decap CMS 管理后台

**Files:**
- Create: `docs/public/admin/index.html`
- Create: `docs/public/admin/config.yml`

- [ ] **Step 1: 写入 `docs/public/admin/index.html`**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BU 内容管理后台</title>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</head>
<body>
  <script>
    CMS.init()
  </script>
</body>
</html>
```

- [ ] **Step 2: 写入 `docs/public/admin/config.yml`**

```yaml
backend:
  name: git-gateway
  branch: main

locale: 'zh_Hans'

media_folder: "docs/public/images"
public_folder: "/BU--/images"

collections:
  - name: "timeline"
    label: "时间轴"
    label_singular: "节点"
    description: "历史沿革页面上的时间轴节点"
    files:
      - label: "时间轴数据"
        name: "timeline-data"
        file: "docs/data/timeline.json"
        fields:
          - label: "节点列表"
            name: "nodes"
            widget: "list"
            fields:
              - { label: "年份", name: "year", widget: "string" }
              - { label: "标题", name: "title", widget: "string" }
              - { label: "描述", name: "desc", widget: "text" }

  - name: "orgchart"
    label: "组织架构"
    files:
      - label: "组织架构数据"
        name: "orgchart-data"
        file: "docs/data/orgchart.json"
        fields:
          - label: "顶层"
            name: "topLevel"
            widget: "object"
            fields:
              - { label: "名称", name: "title", widget: "string" }
              - { label: "描述", name: "desc", widget: "string" }
          - label: "第二层"
            name: "secondLevel"
            widget: "object"
            fields:
              - { label: "名称", name: "title", widget: "string" }
              - { label: "描述", name: "desc", widget: "string" }
          - label: "部门列表"
            name: "departments"
            widget: "list"
            fields:
              - { label: "部门名称", name: "name", widget: "string" }
              - { label: "部门描述", name: "desc", widget: "text" }
          - label: "顾问"
            name: "advisory"
            widget: "object"
            fields:
              - { label: "名称", name: "title", widget: "string" }
              - { label: "描述", name: "desc", widget: "string" }

  - name: "home"
    label: "首页动态"
    files:
      - label: "轮播幻灯片"
        name: "home-slides"
        file: "docs/data/home-slides.json"
        fields:
          - label: "幻灯片列表"
            name: "slides"
            widget: "list"
            fields:
              - { label: "标签", name: "badge", widget: "string" }
              - { label: "背景渐变", name: "bg", widget: "string" }
              - { label: "标题", name: "title", widget: "string" }
              - { label: "副标题", name: "subtitle", widget: "string" }
      - label: "最新动态"
        name: "home-news"
        file: "docs/data/home-news.json"
        fields:
          - label: "动态列表"
            name: "news"
            widget: "list"
            fields:
              - { label: "标签", name: "tag", widget: "string" }
              - { label: "标题", name: "title", widget: "string" }
              - { label: "日期", name: "date", widget: "string" }
              - { label: "链接", name: "link", widget: "string" }

  - name: "members"
    label: "人物介绍"
    label_singular: "成员"
    folder: "docs/members"
    create: true
    slug: "{{fields.name}}"
    fields:
      - { label: "姓名", name: "title", widget: "string" }
      - { label: "角色", name: "role", widget: "string" }
      - { label: "格言", name: "motto", widget: "string" }
      - { label: "头像路径", name: "avatar", widget: "image", required: false }
      - { label: "正文", name: "body", widget: "markdown" }

  - name: "articles"
    label: "成员文章"
    label_singular: "文章"
    folder: "docs/articles"
    create: true
    slug: "{{fields.slug}}"
    fields:
      - { label: "标题", name: "title", widget: "string" }
      - { label: "作者", name: "author", widget: "string" }
      - { label: "分类", name: "category", widget: "select", options: ["学术思考", "成长感悟", "活动复盘"] }
      - { label: "日期", name: "date", widget: "date" }
      - { label: "正文", name: "body", widget: "markdown" }

  - name: "news"
    label: "新闻动态"
    label_singular: "新闻"
    folder: "docs/news"
    create: true
    slug: "{{fields.slug}}"
    fields:
      - { label: "标题", name: "title", widget: "string" }
      - { label: "URL 标识", name: "slug", widget: "string" }
      - { label: "分类", name: "category", widget: "select", options: ["活动总结", "成员专访", "内部通告"] }
      - { label: "日期", name: "date", widget: "date" }
      - { label: "正文", name: "body", widget: "markdown" }
```

> **JSON 文件编辑的 Caveat**：上述 config.yml 中 `timeline` 和 `home` 集合采用 JSON 文件格式。当前配置假设 JSON 顶级是数组（如 `timeline.json` 是 `[{...}, ...]`）。但 Decap CMS 的 `list` widget 嵌入 JSON 文件编辑时，需要将 JSON 结构包装为一个对象（`{ "nodes": [...] }`）以配合 CMS 的 field 解析。需要微调 `timeline.json` 和 `home-slides.json` 的结构来适配，或改用 Decap CMS 的 `manual initialization` 方式。这一步在 Task 7 中处理。

- [ ] **Step 3: Commit**

```bash
git add docs/public/admin/
git commit -m "feat: add Decap CMS admin panel with full collection config"
```

---

### Task 6: 适配 JSON 文件结构以兼容 Decap CMS

**Files:**
- Modify: `docs/data/timeline.json`
- Modify: `docs/data/home-slides.json`
- Modify: `docs/data/home-news.json`

- [ ] **Step 1: 调整 `timeline.json` 为对象包裹数组**

将当前的顶级数组改为嵌套对象，以匹配 Decap CMS config.yml 中的 field 结构：

```json
{
  "nodes": [
    { "year": "2018", "title": "成员初聚", "desc": "BU现有的主要成员..." },
    { "year": "2019-2020", "title": "进一步发展", "desc": "BU的首批成员之间..." },
    { "year": "2021", "title": "组织成立", "desc": "BU的前身姐妹帮..." },
    { "year": "2022", "title": "成员突破 50 人", "desc": "BU的第二批成员..." },
    { "year": "2023", "title": "数字化转型", "desc": "启动内部知识管理系统建设..." },
    { "year": "2024", "title": "五周年庆典", "desc": "举办成立五周年系列纪念活动..." },
    { "year": "2025", "title": "战略升级", "desc": "核心层完成战略规划..." },
    { "year": "2026", "title": "官方网站上线", "desc": "BU 官方网站正式上线..." }
  ]
}
```

- [ ] **Step 2: 调整 `home-slides.json` 为对象包裹数组**

```json
{
  "slides": [
    { "badge": "2026 · 春", "bg": "linear-gradient(135deg, #1a2744 0%, #2a3d66 50%, #1a2744 100%)", "title": "2026 春季团建", "subtitle": "同行·共进 — 42人共赴城郊拓展之旅" },
    { "badge": "里程碑", "bg": "linear-gradient(135deg, #0f1a2e 0%, #1a3a5c 50%, #0f1a2e 100%)", "title": "五周年庆典", "subtitle": "回望来路，展望未来" },
    { "badge": "2025", "bg": "linear-gradient(135deg, #1a2744 0%, #3a4d76 50%, #1a2744 100%)", "title": "战略升级 2025", "subtitle": "聚焦成员培养与社会公益" },
    { "badge": "论坛", "bg": "linear-gradient(135deg, #0f1a2e 0%, #2a4a6e 50%, #0f1a2e 100%)", "title": "青年之声论坛", "subtitle": "与三所高校共话成长" },
    { "badge": "数字化", "bg": "linear-gradient(135deg, #1a2744 0%, #1a3050 50%, #1a2744 100%)", "title": "数字化转型", "subtitle": "知识管理与协作工具全面升级" }
  ]
}
```

- [ ] **Step 3: 调整 `home-news.json` 为对象包裹数组**

```json
{
  "news": [
    { "tag": "活动总结", "title": "2026年度春季团建活动圆满举办", "date": "2026.04.20", "link": "/BU--/news/spring-team-building-2026" },
    { "tag": "成员专访", "title": "对话核心层：BU 未来三年的发展方向", "date": "2026.03.15", "link": "/BU--/news/core-interview-2026" },
    { "tag": "内部通告", "title": "2026年各部门负责人换届通知", "date": "2026.02.01", "link": "/BU--/news/leadership-change-2026" }
  ]
}
```

- [ ] **Step 4: 更新 Timeline.vue 的 import 路径解析**

```js
// 从 import timelineData from '../../data/timeline.json'
// 改为
import timelineData from '../../data/timeline.json'
const events = timelineData.nodes  // 取 .nodes 而非直接使用顶级数组
```

- [ ] **Step 5: 更新 Home.vue 的 import 路径解析**

```js
import slidesData from '../../data/home-slides.json'
import newsData from '../../data/home-news.json'

const slides = slidesData.slides
const latestNews = newsData.news.map(item => ({
  ...item,
  link: withBase(item.link)
}))
```

- [ ] **Step 6: 验证 build 和 dev**

```bash
npm run dev    # 确认所有页面数据正常
npm run build  # 确认无报错
```

- [ ] **Step 7: Commit**

```bash
git add docs/data/ docs/.vitepress/theme/Timeline.vue docs/.vitepress/theme/Home.vue
git commit -m "fix: wrap JSON data arrays in objects for Decap CMS file collection compatibility"
```

---

### Task 7: 配置 Netlify Identity + Git Gateway

- [ ] **Step 1: 注册 Netlify 账号并连接仓库**

1. 访问 `https://app.netlify.com/`，用 GitHub 账号注册
2. 点击 "Add new site" → "Import an existing project"
3. 连接 GitHub 组织 `zoneli894-prog`，选择仓库 `BU--`
4. **不要配置 Netlify 的自动构建和部署**（因为部署仍由 GitHub Actions 处理）
5. 进入 Site settings → Build & deploy → 将 Build command 和 Publish directory 清空或设为占位值，防止 Netlify 误触发构建

- [ ] **Step 2: 启用 Netlify Identity**

1. 进入 Site settings → Identity
2. 点击 "Enable Identity"
3. 在 Registration 设置中选择 "Invite only"（只允许你邀请的成员登录）
4. 在 "External providers" 中保持默认，不需要添加 GitHub/Google 等第三方登录

- [ ] **Step 3: 启用 Git Gateway**

1. 进入 Site settings → Identity → Services
2. 点击 "Enable Git Gateway"
3. 授权 Netlify 访问 GitHub 仓库 `zoneli894-prog/BU--`

- [ ] **Step 4: 添加 CMS admin 的 Identity Widget**

修改 `docs/public/admin/index.html`，在 `<head>` 中添加 Netlify Identity 脚本：

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

在 `<body>` 中 CMS.init() 之前添加：

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/BU--/admin/";
        });
      }
    });
  }
</script>
```

- [ ] **Step 5: 邀请成员**

1. 在 Netlify 后台 → Identity → 点击 "Invite users"
2. 输入需要编辑权限的成员邮箱
3. 成员收到邀请邮件后点击链接设置密码

- [ ] **Step 6: 将 Netlify 的 site URL 设为 Decap CMS 的 `site_url`**

在 `config.yml` 顶部添加：

```yaml
site_url: https://zoneli894-prog.github.io/BU--
```

- [ ] **Step 7: Commit**

```bash
git add docs/public/admin/
git commit -m "feat: integrate Netlify Identity widget into CMS admin page"
```

---

### Task 8: 端到端验证

- [ ] **Step 1: 验证 CMS 后台可访问**

```bash
npm run dev
```

访问 `http://localhost:4173/BU--/admin/`（注意 base 路径）

> 本地环境下 Netlify Identity 无法工作（它需要 Netlify 的域名），CMS 会在本地显示 "Failed to load" 是可以接受的。端到端验证在推送到 main 并部署后执行。

- [ ] **Step 2: 验证 JSON 数据不影响 dev/build**

```bash
npm run dev
npm run build
```

确认：
- 首页轮播 5 张幻灯片正常
- 首页最新动态 3 条正常
- 时间轴 8 个节点正常
- 组织架构全层级（主席团→秘书处→5部门→顾问）正常

- [ ] **Step 3: Push 并等待部署**

```bash
git push origin main
```

等待 GitHub Actions 构建部署完成（约 1-2 分钟）。

- [ ] **Step 4: 生产环境验证 CMS**

1. 访问 `https://zoneli894-prog.github.io/BU--/admin/`
2. 确认跳转到 Netlify Identity 登录界面
3. 用受邀的邮箱登录
4. 编辑一条 timeline 节点 → 发布
5. 等 GitHub Actions 构建完成 → 访问网站确认更新生效

- [ ] **Step 5: Commit（如有微调）**

```bash
git add -A
git commit -m "test: end-to-end CMS verification complete"
```

---

## Phase 2：Strapi + Supabase 混合方案（未来）

> 当团队对 Phase 1 的"编辑体验"或"构建延迟"不满意时启动此阶段。Phase 2 不依赖 Phase 1 的 Decap CMS——它从头替换内容管理层，但 Vue 组件中数据与视图解耦的架构（Task 1-4）可以复用。

**目标：**
- 用 Strapi 替代 Decap CMS 作为内容管理后台，编辑即时生效
- 用 Supabase Auth 替代 Netlify Identity，邮箱+密码登录
- 添加评论功能和用户系统
- 保留 GitHub Pages 静态部署

**Phase 2 文件结构变更：**

```
docs/
├── data/                          # 保留：作为构建时的中间数据层
├── .vitepress/
│   └── theme/
│       ├── LoginModal.vue         # 新增：登录弹窗组件（客户端 Supabase Auth）
│       └── CommentSection.vue     # 新增：评论组件（客户端 Supabase）
│   └── config.mts                 # 修改：增加 buildEnd 钩子拉取 Strapi 数据
```

**关键任务（提纲）：**

1. **部署 Strapi 实例**：Railway 免费额度或 $5/月 VPS，配置内容类型（Timeline、OrgChart、Member、Article、News、HomeSlide、HomeNews）
2. **迁移 Markdown 内容到 Strapi**：编写 Node.js 脚本批量导入
3. **VitePress 构建钩子**：在 `config.mts` 的 `buildEnd` 中 fetch Strapi API，写入 `docs/data/` JSON 文件，供 Vue 组件 import
4. **Supabase 项目初始化**：创建 `profiles` 和 `comments` 表，配置 Auth
5. **Vue 登录/评论组件**：`LoginModal.vue` 和 `CommentSection.vue`，通过 Supabase JS SDK 在客户端直连
6. **认证流程**：Supabase Auth → JWT → 评论时验证身份，不需要 GitHub 账号
7. **移除 Phase 1 遗留**：删除 `docs/public/admin/`，移除 Netlify Identity 依赖

---

## Phase 3：Nuxt 3 全栈迁移（未来）

> 当团队需要成员协作空间、实时通知、在线报名等 Web 应用功能时启动。Phase 3 保持 Strapi + Supabase 不变，只换前端框架和部署平台。

**关键任务（提纲）：**

1. **初始化 Nuxt 3 项目**：`npx nuxi init bu-app`
2. **迁移 Vue 组件**：Timeline.vue、OrgChart.vue、MemberGrid.vue 等从 VitePress 主题目录复制到 Nuxt `components/`
3. **Nuxt Content 模块**：替代 VitePress 的 Markdown 渲染
4. **Strapi + Supabase 连接**：Nuxt 3 插件封装 API 调用，SSR 渲染
5. **新增 API Routes**：服务端逻辑（活动报名、通知）
6. **部署到 Vercel/Railway**：替代 GitHub Pages
