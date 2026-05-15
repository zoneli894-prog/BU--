<template>
  <div>
    <div v-for="group in groups" :key="group.title">
      <h3 class="member-group-title">{{ group.title }}</h3>
      <div class="member-grid">
        <a
          v-for="member in group.members"
          :key="member.name"
          :href="withBase(member.link)"
          class="member-card"
        >
          <div class="member-avatar">{{ member.name[0] }}</div>
          <p class="member-name">{{ member.name }}</p>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-quote">"{{ member.quote }}"</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const groups = [
  {
    title: '创始人 / 名誉成员',
    members: [
      { name: '张铭远', role: '创始人 · 名誉主席', quote: '志合者，不以山海为远', link: '/members/zhang-mingyuan' },
      { name: '李思源', role: '联合创始人 · 顾问', quote: '授人以鱼不如授人以渔', link: '/members/li-siyuan' },
    ],
  },
  {
    title: '现任核心层',
    members: [
      { name: '王承志', role: '主席', quote: '以身作则，知行合一', link: '/members/wang-chengzhi' },
      { name: '陈嘉慧', role: '副主席', quote: '细节决定成败', link: '/members/chen-jiahui' },
      { name: '刘宇航', role: '秘书长', quote: '效率源于秩序', link: '/members/liu-yuhang' },
    ],
  },
  {
    title: '各部门骨干',
    members: [
      { name: '赵明轩', role: '宣传部部长', quote: '好的故事会自己传播', link: '/members/zhao-mingxuan' },
      { name: '孙雨桐', role: '外联部部长', quote: '每一次握手都是一扇新的窗', link: '/members/sun-yutong' },
      { name: '周天翔', role: '活动部部长', quote: '让每个人都有参与感', link: '/members/zhou-tianxiang' },
      { name: '吴晓峰', role: '技术部部长', quote: '技术为人服务', link: '/members/wu-xiaofeng' },
      { name: '黄静怡', role: '财务部部长', quote: '每一分钱都花在刀刃上', link: '/members/huang-jingyi' },
    ],
  },
]
</script>
