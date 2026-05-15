import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Home from './Home.vue'
import Timeline from './Timeline.vue'
import OrgChart from './OrgChart.vue'
import MemberGrid from './MemberGrid.vue'
import MemberDetail from './MemberDetail.vue'
import ResourceTable from './ResourceTable.vue'
import ArticleList from './ArticleList.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('Timeline', Timeline)
    app.component('OrgChart', OrgChart)
    app.component('MemberGrid', MemberGrid)
    app.component('MemberDetail', MemberDetail)
    app.component('ResourceTable', ResourceTable)
    app.component('ArticleList', ArticleList)
  },
} satisfies Theme
