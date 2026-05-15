import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Home from './Home.vue'
import Timeline from './Timeline.vue'
import OrgChart from './OrgChart.vue'
import MemberGrid from './MemberGrid.vue'
import ResourceTable from './ResourceTable.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
    app.component('Timeline', Timeline)
    app.component('OrgChart', OrgChart)
    app.component('MemberGrid', MemberGrid)
    app.component('ResourceTable', ResourceTable)
  },
} satisfies Theme
