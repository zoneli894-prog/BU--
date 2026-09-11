import { defineConfig } from 'vitepress'

// 单一来源：修改 base 时只需改这里。
// 注意 VitePress 只会给 themeConfig 中的路径自动加 base，
// head 中的链接必须手动拼接，否则部署到子路径后会 404。
const base = '/BU--'

export default defineConfig({
  base,
  title: 'Brother Union',
  description: '凝聚力量，共拓边界',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}/favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#1a2744' }],
    ['meta', { name: 'author', content: 'Brother Union' }],
    [
      'meta',
      {
        name: 'description',
        content: 'Brother Union（BU）官方网站 — 非商业性质团体，展示组织历程、架构、成员风采、新闻动态与共享资料。凝聚力量，共拓边界。',
      },
    ],
    // og:url / og:image 必须是绝对地址，社交平台不会解析相对路径
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Brother Union' }],
    ['meta', { property: 'og:title', content: 'Brother Union 官方网站' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '非商业性质团体 · 志同道合 · 共同成长。凝聚力量，共拓边界。',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://zoneli894-prog.github.io/BU--/' }],
    ['meta', { property: 'og:image', content: 'https://zoneli894-prog.github.io/BU--/logo.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Brother Union',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '关于我们',
        items: [
          { text: '历史沿革', link: '/history/' },
          { text: '组织架构', link: '/structure/' },
          { text: '人物介绍', link: '/members/' },
        ],
      },
      { text: '新闻动态', link: '/news/' },
      { text: '成员文章', link: '/articles/' },
      { text: '资料库', link: '/resources/' },
      // 游戏为独立页面、无站内导航，新标签页打开以免访客无法返回本站
      {
        text: '2048 小游戏',
        link: '/2048/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
    sidebar: {
      '/news/': [
        {
          text: '新闻动态',
          items: [
            { text: '全部文章', link: '/news/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
    footer: {
      message: 'Brother Union — 非商业性质团体',
      copyright: `Copyright © 2020-${new Date().getFullYear()} Brother Union`,
    },
    outline: { label: '页面导航' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '最后更新于',
    },
    search: {
      provider: 'local',
    },
  },
})
