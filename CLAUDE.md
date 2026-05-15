# Brother Union (BU) 官方网站

## 项目概述

Brother Union (BU) 是一个非商业性质团体的官方网站，使用 VitePress 静态网站生成器搭建。视觉风格为现代简约（海军蓝 #1a2744 + 香槟金 #c9a96e），面向中文用户。

## 技术栈

- **框架**: VitePress 1.6.x + Vue 3
- **内容管理**: Markdown + YAML Front Matter
- **部署方案**: GitHub Pages（base 路径已设为 `/BU--`）

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
│   ├── members/
│   │   ├── index.md                   # 人物列表页，引入 MemberGrid.vue
│   │   ├── zhang-mingyuan.md          # 成员详情页（10 位成员各有独立页面）
│   │   ├── li-siyuan.md
│   │   ├── wang-chengzhi.md
│   │   ├── chen-jiahui.md
│   │   ├── liu-yuhang.md
│   │   ├── zhao-mingxuan.md
│   │   ├── sun-yutong.md
│   │   ├── zhou-tianxiang.md
│   │   ├── wu-xiaofeng.md
│   │   └── huang-jingyi.md
│   ├── news/
│   │   ├── index.md                   # 新闻列表页（手写卡片链接）
│   │   ├── spring-team-building-2026.md
│   │   ├── core-interview-2026.md
│   │   ├── leadership-change-2026.md
│   │   └── annual-review-2025.md
│   ├── articles/
│   │   ├── index.md                   # 成员文章列表页，引入 ArticleList.vue
│   │   ├── sustainable-development.md
│   │   ├── my-three-years.md
│   │   ├── communication-art.md
│   │   ├── spring-review-2025.md
│   │   └── building-trust.md
│   ├── resources/index.md             # 资料库页，引入 ResourceTable.vue
│   └── .vitepress/
│       ├── config.mts                 # 站点配置（标题、base路径、导航栏、页脚、搜索）
│       └── theme/
│           ├── index.ts               # 自定义主题入口，注册 7 个全局 Vue 组件
│           ├── custom.css             # 全局样式：品牌色、时间轴、卡片、表格、响应式
│           ├── Home.vue               # 首页组件：Hero + 轮播 + 愿景 + 动态 + 快速链接
│           ├── Timeline.vue           # 时间轴：9 个节点、IntersectionObserver 淡入动画
│           ├── OrgChart.vue           # 组织架构图：树状层级
│           ├── MemberGrid.vue         # 成员卡片网格，点击跳转独立详情页
│           ├── MemberDetail.vue       # 成员详情页头部组件（头像+姓名+角色+格言）
│           ├── ArticleList.vue        # 成员文章列表组件，含分类筛选
│           └── ResourceTable.vue      # 资料表格：4 类筛选、文件下载列表
```

## 各文件职责

### 配置与主题

- [config.mts](docs/.vitepress/config.mts) — 站点配置：标题、base 路径 (`/BU--`)、导航菜单（含成员文章）、页脚、本地搜索
- [index.ts](docs/.vitepress/theme/index.ts) — 注册 7 个全局 Vue 组件
- [custom.css](docs/.vitepress/theme/custom.css) — 品牌色 CSS 变量、时间轴/卡片/表格的完整样式、移动端响应式

### Vue 组件

- **Home.vue** — 首页：全屏渐变 Hero + 自动轮播（5 张幻灯片，金色圆点指示器，5 秒间隔）+ 愿景 + 3 条最新动态 + 5 个快速链接（含成员文章）
- **Timeline.vue** — 垂直时间轴，IntersectionObserver 控制淡入，9 个历史节点（2018-2026）
- **OrgChart.vue** — 树状组织图：主席团→秘书处→5 部门 + 顾问委员会
- **MemberGrid.vue** — 成员卡片网格，用 `<a>` 链接跳转独立详情页（不再使用弹窗）
- **MemberDetail.vue** — 成员详情页头部：圆形头像 + 姓名 + 角色 + 格言
- **ArticleList.vue** — 文章列表：含分类筛选（学术思考/成长感悟/活动复盘）、作者头像、日期
- **ResourceTable.vue** — 资料表格：4 类分类筛选 + 文件下载列表

### 内容页面

- **成员详情页** (`docs/members/*.md`)：每位成员独立页面，使用 MemberDetail.vue 组件，支持长文本排版
- **成员文章** (`docs/articles/*.md`)：5 篇示例文章，含学术思考、成长感悟、活动复盘
- **新闻文章** (`docs/news/*.md`)：4 篇示例新闻，支持富文本、引语块、表格

### 路由与 base 路径

所有组件中的链接使用 VitePress 的 `withBase()` 函数处理 base 路径（`/BU--`），确保部署到 GitHub Pages 子路径时链接正确。

## 常用命令

```bash
npm run dev      # 启动开发服务器 (默认 localhost:4173)
npm run build    # 构建生产版本到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

## 已完成

- [x] VitePress 项目初始化与依赖安装
- [x] 站点配置（导航、页脚、中文化、base 路径、本地搜索）
- [x] 全局主题样式（品牌色系、字体、响应式布局）
- [x] 首页（Hero + 自动轮播 + 愿景 + 最新动态 + 快速指引）
- [x] 历史沿革页（垂直时间轴 + 滚动淡入效果）
- [x] 组织架构页（可视化树状图 + 职责说明文档）
- [x] 人物介绍页（卡片网格 → 独立详情页，10 位成员各有完整 .md）
- [x] 新闻页（列表页 + 4 篇示例详情文章）
- [x] 成员文章页（列表组件 + 分类筛选 + 5 篇示例文章）
- [x] 资料库页（分类筛选 + 文件下载表格）
- [x] 所有链接使用 withBase() 修复 base 路径兼容性
- [x] 构建验证通过

## 待完成 / 待改进

- [ ] GitHub 仓库创建 + GitHub Actions CI/CD 部署配置
- [ ] 用真实内容替换占位文本和头像
- [ ] 添加 favicon（当前无文件，config 中引用但未提供）
- [ ] 新闻页面改为自动生成列表（当前为手动维护链接）
- [ ] 资料库的下载按钮链接到实际文件
- [ ] 添加 404 页面
- [ ] SEO 优化（meta description、Open Graph 标签等）

## 设计规范

- **主色调**: Navy Blue `#1a2744`（稳重、信任、团结）
- **辅助色**: Champagne Gold `#c9a96e`（荣誉感、高亮）
- **背景色**: Ivory `#f8f6f0`
- **字体**: PingFang SC / Microsoft YaHei / Noto Sans SC
- **移动端断点**: 768px（时间轴单列、新闻卡片竖排、架构图纵向排列）
