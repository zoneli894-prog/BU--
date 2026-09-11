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
import memberData from '../../data/member-grid.json'

// 名单来自 docs/data/member-grid.json，可在 CMS 后台「人物介绍」中维护，
// 无需修改本组件代码。
const groups = memberData.groups
</script>
