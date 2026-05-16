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
      { name: '吴诗迪', role: '创始人 · 名誉主席', quote: '志合者，不以山海为远', link: '/members/wu-shidi' },
      { name: '段旭东', role: '联合创始人 · 顾问', quote: '授人以鱼不如授人以渔', link: '/members/duan-xudong' },
    ],
  },
  {
    title: '现任核心层',
    members: [
      { name: '李镇佑', role: '主席', quote: '以身作则，知行合一', link: '/members/li-zhenyou' },
      { name: '魏江鸣', role: '副主席', quote: '细节决定成败', link: '/members/wei-jiangming' },
      { name: '黎宇骋', role: '秘书长', quote: '效率源于秩序', link: '/members/li-yucheng' },
    ],
  },
  {
    title: '各部门骨干',
    members: [
      { name: '谢事成', role: '宣传部部长', quote: '好的故事会自己传播', link: '/members/xie-shicheng' },
      { name: '蒋诗翰', role: '外联部部长', quote: '每一次握手都是一扇新的窗', link: '/members/jiang-ishan' },
      { name: '杨仲燚', role: '活动部部长', quote: '让每个人都有参与感', link: '/members/yang-zhongyi' },
      { name: '张彭博', role: '技术部部长', quote: '技术为人服务', link: '/members/zhang-pengbo' },
      { name: '赖哲君', role: '财务部部长', quote: '每一分钱都花在刀刃上', link: '/members/lai-zhejun' },
    ],
  },
]
</script>
