import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/BU--',
  title: 'Brother Union',
  description: '凝聚力量，共拓边界',
  lang: 'zh-CN',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
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
      { text: '资料库', link: '/resources/' },
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
  },
})
themeConfig: {
  search: {
    provider: 'local'
  }
}
