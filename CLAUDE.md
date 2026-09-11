# Brother Union (BU) 官方网站

## 项目概述

Brother Union (BU) 是一个非商业性质团体的官方网站，使用 VitePress 静态网站生成器搭建。视觉风格为现代简约（海军蓝 #1a2744 + 香槟金 #c9a96e），面向中文用户。

- 线上地址：https://zoneli894-prog.github.io/BU--/
- 仓库地址：https://github.com/zoneli894-prog/BU--.git
- 内容后台：https://curious-brigadeiros-4f1d1a.netlify.app/admin/（邀请制）

## 技术栈

- **框架**: VitePress 1.6.x + Vue 3
- **内容管理**: Markdown + YAML Front Matter + JSON
- **内容后台**: Decap CMS + Netlify Identity + Git Gateway
- **部署方案**: GitHub Pages（GitHub Actions 自动构建，base 路径为 `/BU--`）

## 项目结构

```
.
├── CLAUDE.md                          # 本文件
├── README.md                          # 面向协作者的项目说明
├── CHANGE-HANDOVER.md                 # Phase 1 CMS 改造交接记录
├── package.json                       # npm 配置，含 dev/build/preview 脚本
├── .gitignore                         # 忽略 node_modules、构建产物等
├── .github/workflows/deploy.yml       # push main 后自动构建部署
└── docs/
    ├── index.md                       # 首页，引入 Home.vue 组件
    ├── public/
    │   ├── logo.svg                   # 站点 logo
    │   ├── favicon.svg                # 站点图标
    │   ├── 2048/                      # BU 成员版 2048（独立静态页，无站内导航）
    │   ├── admin/                     # Decap CMS 后台入口 + config.yml
    │   └── invite/                    # Netlify 邀请设置密码的落地页
    ├── data/                          # 结构化内容（可在 CMS 中编辑）
    │   ├── timeline.json              # 时间轴 8 个节点（2018-2026）
    │   ├── orgchart.json              # 组织架构：主席团→秘书处→6 部门→顾问
    │   ├── home-slides.json           # 首页轮播 5 张幻灯片
    │   ├── home-news.json             # 首页最新动态 3 条
    │   ├── member-grid.json           # 人物列表分组与卡片信息
    │   ├── articles.json              # 成员文章清单（列表页数据源）
    │   └── resources.json             # 资料库文件清单
    ├── history/index.md               # 历史沿革页，引入 Timeline.vue
    ├── structure/index.md             # 组织架构页，引入 OrgChart.vue + 职责说明
    ├── members/
    │   ├── index.md                   # 人物列表页，引入 MemberGrid.vue
    │   └── *.md                       # 11 位成员各有独立详情页
    ├── news/
    │   ├── index.md                   # 新闻列表页（手写卡片，用相对链接）
    │   └── *.md                       # 4 篇新闻详情
    ├── articles/
    │   ├── index.md                   # 成员文章列表页，引入 ArticleList.vue
    │   └── *.md                       # 5 篇文章正文
    ├── resources/index.md             # 资料库页，引入 ResourceTable.vue
    ├── superpowers/                   # CMS 改造的设计文档、实施计划与操作指南
    └── .vitepress/
        ├── config.mts                 # 站点配置（标题、base、导航、页脚、搜索）
        └── theme/
            ├── index.ts               # 自定义主题入口，注册 7 个全局组件
            ├── custom.css             # 全局样式：品牌色、时间轴、卡片、表格、响应式
            ├── Home.vue               # 首页：Hero + 轮播 + 愿景 + 动态 + 快速链接
            ├── Timeline.vue           # 时间轴：读 timeline.json + 滚动淡入
            ├── OrgChart.vue           # 组织架构图：读 orgchart.json
            ├── MemberGrid.vue         # 成员卡片网格：读 member-grid.json
            ├── MemberDetail.vue       # 成员详情页头部（头像+姓名+角色+格言）
            ├── ArticleList.vue        # 文章列表：读 articles.json + 分类筛选
            └── ResourceTable.vue      # 资料表格：读 resources.json + 分类筛选
```

## 各文件职责

### 配置与主题

- [config.mts](docs/.vitepress/config.mts) — 站点配置：标题、base 路径 (`/BU--`)、导航菜单、页脚、本地搜索、head 标签。**base 在此单点定义**，`head` 中的链接必须手动拼 `${base}`，themeConfig 里的路径由 VitePress 自动加 base。
- [index.ts](docs/.vitepress/theme/index.ts) — 注册 7 个全局 Vue 组件
- [custom.css](docs/.vitepress/theme/custom.css) — 品牌色 CSS 变量、时间轴/成员卡/资料表/组织架构/新闻卡样式、768px 响应式断点

### Vue 组件

- **Home.vue** — 首页：Canvas 粒子 Hero（带鼠标视差、`prefers-reduced-motion` 降级）+ 自动轮播（5 张、5 秒、金色圆点 + 进度条）+ 愿景（数字递增）+ 3 条最新动态（读 `home-news.json`）+ 6 个快速链接
- **Timeline.vue** — 垂直时间轴，IntersectionObserver 控制淡入
- **OrgChart.vue** — 树状组织图：主席团→秘书处→6 部门 + 顾问委员会
- **MemberGrid.vue** — 成员卡片网格，`<a>` 跳转独立详情页；数据来自 `member-grid.json`
- **MemberDetail.vue** — 成员详情页头部：圆形头像（取姓名首字）+ 姓名 + 角色 + 格言
- **ArticleList.vue** — 文章列表：分类筛选（学术思考/成长感悟/活动复盘）、作者头像与可点击的作者链接；数据来自 `articles.json`
- **ResourceTable.vue** — 资料表格：4 类筛选 + 下载按钮（`url` 为空时显示「待上传」）；数据来自 `resources.json`

### 内容页面

- **成员详情页** (`docs/members/*.md`)：每位成员独立页面，使用 MemberDetail.vue 组件，frontmatter 用 `name` / `role` / `quote`
- **成员文章** (`docs/articles/*.md`)：5 篇文章，frontmatter 用 `summary` 作为摘要
- **新闻文章** (`docs/news/*.md`)：4 篇新闻，支持引语块、表格
- **新闻列表** (`docs/news/index.md`)：手写卡片，链接必须用**相对路径**（`./xxx`）或带 `/BU--` 前缀的绝对路径

### 数据源与 CMS 的关系（重要）

同一份内容存在两个入口，改错地方不会生效：

| 想改的内容 | 改哪里 | CMS 集合 |
|---|---|---|
| 时间轴节点 | `docs/data/timeline.json` | 时间轴 |
| 组织架构 | `docs/data/orgchart.json` | 组织架构 |
| 首页轮播 / 最新动态 | `docs/data/home-slides.json` / `home-news.json` | 首页内容 |
| **人物列表卡片** | `docs/data/member-grid.json` | 人物列表 |
| **成员详情正文** | `docs/members/*.md` | 人物详情 |
| **文章清单（列表页）** | `docs/data/articles.json` | 文章清单 |
| **文章正文** | `docs/articles/*.md` | 成员文章正文 |
| **资料库文件表** | `docs/data/resources.json` | 资料库 |
| 新闻正文 | `docs/news/*.md` | 新闻动态 |
| 新闻列表卡片 | `docs/news/index.md`（手写） | ❌ 不在 CMS 内 |
| Hero 标题、愿景文案、统计数字、快速链接 | `Home.vue`（组件内） | ❌ 不在 CMS 内 |

**新增成员或文章时必须同时补两处**：详情页 `.md` + 对应清单 JSON，否则列表页不会显示。CMS 的 `config.yml` 字段名必须与页面实际读取的字段一致，否则编辑后前台不显示（历史上 `excerpt`/`summary`、`term`/`quote` 就踩过这个坑）。

## 常用命令

```bash
npm run dev      # 启动开发服务器 (默认 localhost:4173)
npm run build    # 构建生产版本到 docs/.vitepress/dist
npm run preview  # 预览构建结果
```

Windows PowerShell 若提示 `npm.ps1 cannot be loaded`，用 `npm.cmd run build`。

## 内容口径（单一事实来源）

改动文案时请与以下口径保持一致：

- **起始年份**: 2018 年成员初聚；2021 年组织正式定型
- **成员规模**: 42 人（2025 年底至今）
- **部门数量**: 6 个（宣传部、外联部、活动部、保皇部、技术部、财务部）
- **现任核心层**: 主席 李镇佑 / 副主席 魏江鸣 / 秘书长 黎宇骋
- **创始人**: 吴诗迪（名誉主席）、段旭东（联合创始人 · 顾问）
- 首页 `stats`（`Home.vue`）与 `timeline.json`、`annual-review-2025.md` 中的数字需同步修改

## 已完成

- [x] VitePress 项目初始化与依赖安装
- [x] 站点配置（导航、页脚、中文化、base 路径、本地搜索）
- [x] 全局主题样式（品牌色系、字体、响应式布局）
- [x] 首页（Canvas 粒子 Hero + 自动轮播 + 愿景 + 最新动态 + 快速指引）
- [x] 历史沿革页（垂直时间轴 + 滚动淡入）
- [x] 组织架构页（可视化树状图 + 职责说明）
- [x] 人物介绍页（11 位真实成员，卡片网格 + 独立详情页）
- [x] 新闻页（列表页 + 4 篇详情文章）
- [x] 成员文章页（列表组件 + 分类筛选 + 5 篇文章）
- [x] 资料库页（分类筛选 + 文件表格 + 「待上传」占位态）
- [x] BU 成员版 2048 小游戏（独立静态页 + 品牌配色覆盖）
- [x] favicon / logo
- [x] GitHub Actions 自动部署至 GitHub Pages
- [x] Decap CMS 内容后台（8 个集合，字段与页面读取一致）
- [x] 数据解耦：所有列表组件改为读 JSON，不再硬编码
- [x] 构建验证通过

## 待完成 / 待改进

- [ ] 资料库文件真实上传（现在全部为「待上传」，`url` 填 `/files/文件名` 即启用）
- [ ] 新闻列表改为自动生成（当前手动维护卡片，易漏）
- [ ] 图片资源：`docs/public/images/` 目录尚未创建（CMS 上传会自动创建），成员头像目前是姓名首字
- [ ] 404 页面
- [ ] SEO：`config.mts` 的 `head` 增加 Open Graph / description 标签
- [ ] 成员详情页与列表 JSON 的双写问题（可考虑改由 `import.meta.glob` 从 frontmatter 生成列表）
- [ ] 2048 游戏内嵌 Supabase 排行榜（publishable key 在前端，需确认 RLS 策略）
- [ ] 徐晨洛页面存在自相矛盾表述（frontmatter 写「保皇部部长」，正文写「前保皇成员」），需本人确认

## 设计规范

- **主色调**: Navy Blue `#1a2744`（稳重、信任、团结）
- **辅助色**: Champagne Gold `#c9a96e`（荣誉感、高亮）
- **背景色**: Ivory `#f8f6f0`
- **字体**: Cormorant Garamond（英文标题）/ Noto Serif SC（中文标题）/ Noto Sans SC / PingFang SC / Microsoft YaHei
- **移动端断点**: 768px（时间轴单列、新闻卡片竖排、架构图纵向排列、2048 标题缩小）

## 注意事项

- 不要在 Markdown、JSON、前端代码或提交记录中存放密码、令牌等敏感信息
- 发布成员资料、头像或联系方式前应获得本人授权
- 新闻列表页的硬编码链接不要写成 `/news/xxx` 这种根路径绝对链接，部署到子路径会 404
