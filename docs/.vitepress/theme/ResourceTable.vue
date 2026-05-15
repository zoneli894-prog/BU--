<template>
  <div>
    <div class="category-filter">
      <button
        v-for="cat in categories"
        :key="cat"
        class="cat-btn"
        :class="{ active: activeCat === cat }"
        @click="activeCat = cat"
      >
        {{ cat }}
      </button>
    </div>

    <table class="resource-table">
      <thead>
        <tr>
          <th>文件名</th>
          <th>分类</th>
          <th>格式</th>
          <th>更新日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in filtered" :key="file.name">
          <td>{{ file.name }}</td>
          <td><span class="resource-badge">{{ file.category }}</span></td>
          <td>{{ file.format }}</td>
          <td>{{ file.date }}</td>
          <td>
            <a href="#" class="download-btn" @click.prevent>下载</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['全部', '规章制度', '活动手册', '研究报告', '多媒体存档']
const activeCat = ref('全部')

const files = [
  { name: 'BU 组织章程（2024修订版）', category: '规章制度', format: 'PDF', date: '2024-06-15' },
  { name: '成员行为准则', category: '规章制度', format: 'PDF', date: '2023-03-01' },
  { name: '财务管理制度', category: '规章制度', format: 'PDF', date: '2023-09-20' },
  { name: '2025年度活动手册', category: '活动手册', format: 'PDF', date: '2025-01-10' },
  { name: '春季团建活动策划书', category: '活动手册', format: 'PDF', date: '2026-03-01' },
  { name: '五周年庆典活动方案', category: '活动手册', format: 'PDF', date: '2024-05-20' },
  { name: 'BU 发展战略白皮书 2025-2028', category: '研究报告', format: 'PDF', date: '2025-02-15' },
  { name: '成员满意度调研报告（2025）', category: '研究报告', format: 'PDF', date: '2025-11-30' },
  { name: '组织治理模式研究', category: '研究报告', format: 'PDF', date: '2024-08-10' },
  { name: '五周年纪念视频', category: '多媒体存档', format: 'MP4', date: '2024-06-01' },
  { name: '年度回顾相册（2025）', category: '多媒体存档', format: 'ZIP', date: '2025-12-25' },
]

const filtered = computed(() => {
  if (activeCat.value === '全部') return files
  return files.filter((f) => f.category === activeCat.value)
})
</script>
