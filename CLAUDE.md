# Brother Union (BU) 官方网站

## 项目概述

Brother Union (BU) 是一个非商业性质团体的官方网站，使用 VitePress 静态网站生成器搭建。视觉风格为现代简约（海军蓝 #1a2744 + 香槟金 #c9a96e），面向中文用户。

## 技术栈

- **框架**: VitePress 1.6.x + Vue 3
- **内容管理**: Markdown + YAML Front Matter
- **部署方案**: GitHub Pages（尚未配置 CI/CD）

## 项目结构

```
d:\BU网站\
├── CLAUDE.md                          # 本文件
├── package.json                       # npm 配置，含 dev/build/preview 脚本
├── .gitignore                         # 忽略 node_modules、构建产物等
├── docs/
│   ├── index.md                       # 首页，引入 Home.vue 组件
│   ├── public/
│   │   └── logo.svg                   # 站点 logo（BU 字样的方块图标）
│   ├── history/index.md               # 历史沿革页，引入 Timeline.vue
│   ├── structure/index.md             # 组织架构页，引入 OrgChart.vue + 职责说明文档
│   ├── members/index.md               # 人物介绍页，引入 MemberGrid.vue
│   ├── news/
│   │   ├── index.md                   # 新闻列表页（手写卡片链接，非自动生成）
│   │   ├── spring-team-building-2026.md
│   │   ├── core-interview-2026.md
│   │   ├── leadership-change-2026.md
│   │   └── annual-review-2025.md
│   ├── resources/index.md             # 资料库页，引入 ResourceTable.vue
│   └── .vitepress/
│       ├── config.mts                 # 站点配置（标题、导航栏、页脚、侧边栏）
│       └── theme/
│           ├── index.ts               # 自定义主题入口，注册 5 个全局 Vue 组件
│           ├── custom.css             # 全局样式：品牌色、时间轴、卡片、表格、响应式
│           ├── Home.vue               # 首页组件：Hero 区、愿景、最新动态、快速链接
│           ├── Timeline.vue           # 时间轴组件：9 个节点、IntersectionObserver 淡入动画
│           ├── OrgChart.vue           # 组织架构图：树状层级展示主席团→秘书处→各部门
│           ├── MemberGrid.vue         # 成员网格：12 位成员卡片 + 点击弹窗详情
│           └── ResourceTable.vue      # 资料表格：4 类筛选、11 份示例文件
```

## 各文件职责

### 配置与主题

- [config.mts](docs/.vitepress/config.mts) — 站点标题、导航菜单、页脚版权、社交链接、中文化文案
- [index.ts](docs/.vitepress/theme/index.ts) — 注册 5 个自定义 Vue 组件到全局
- [custom.css](docs/.vitepress/theme/custom.css) — 品牌色 CSS 变量、时间轴/卡片/表格/Modal 的完整样式、移动端响应式断点

### Vue 组件

- **Home.vue** — 全屏渐变 Hero（深蓝→靛蓝）+ 金色 Slogan、组织愿景 3 段文字、3 条最新动态卡片、4 个快速指引入口
- **Timeline.vue** — 垂直中心线 + 左右交错时间卡片，IntersectionObserver 控制淡入，9 个历史节点（2018-2026）
- **OrgChart.vue** — 树状组织图：主席团→秘书处→5 个职能部门（宣传/外联/活动/技术/财务）+ 顾问委员会
- **MemberGrid.vue** — 三组成员网格（创始人2人/核心层3人/骨干5人），点击卡片打开 Modal 显示详细履历
- **ResourceTable.vue** — 分类按钮筛选 + 文件列表表格，4 类资料（规章制度/活动手册/研究报告/多媒体存档）

### 内容页面

- 新闻文章使用 Markdown + Front Matter（title/date/category），支持富文本、引语块、表格
- 目前有 4 篇占位文章，新增文章只需在 `docs/news/` 下创建 `.md` 文件并手动在 `news/index.md` 中添加卡片链接

## 常用命令

```bash
npm run dev      # 启动开发服务器 (默认 localhost:4173)
npm run build    # 构建生产版本到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 已完成

- [x] VitePress 项目初始化与依赖安装
- [x] 站点配置（导航、页脚、中文化）
- [x] 全局主题样式（品牌色系、字体、响应式布局）
- [x] 首页（Hero、愿景、最新动态、快速链接）
- [x] 历史沿革页（垂直时间轴 + 滚动淡入效果）
- [x] 组织架构页（可视化树状图 + 职责说明文档）
- [x] 人物介绍页（卡片网格 + 详情弹窗，12 位占位成员）
- [x] 新闻页（列表页 + 4 篇示例详情文章）
- [x] 资料库页（分类筛选 + 文件下载表格）
- [x] 构建验证通过

## 待完成 / 待改进

- [ ] GitHub 仓库创建 + GitHub Actions CI/CD 部署配置
- [ ] 用真实内容替换占位文本和头像
- [ ] 添加 favicon（当前无文件，config 中引用但未提供）
- [ ] 新闻页面改为自动生成列表（当前为手动维护链接）
- [ ] 资料库的下载按钮链接到实际文件
- [ ] 添加 404 页面
- [ ] SEO 优化（meta description、Open Graph 标签等）
- [ ] 考虑添加搜索功能（VitePress 内置本地搜索可直接开启）

## 设计规范

- **主色调**: Navy Blue `#1a2744`（稳重、信任、团结）
- **辅助色**: Champagne Gold `#c9a96e`（荣誉感、高亮）
- **背景色**: Ivory `#f8f6f0`
- **字体**: PingFang SC / Microsoft YaHei / Noto Sans SC
- **移动端断点**: 768px（时间轴单列、新闻卡片竖排、架构图纵向排列）
