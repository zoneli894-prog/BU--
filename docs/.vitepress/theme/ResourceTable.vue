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
            <a
              v-if="file.url"
              :href="withBase(file.url)"
              class="download-btn"
              download
            >下载</a>
            <span
              v-else
              class="download-btn download-btn--disabled"
              title="文件尚未上传"
            >待上传</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import resourcesData from '../../data/resources.json'

const categories = ['全部', '规章制度', '活动手册', '研究报告', '多媒体存档']
const activeCat = ref('全部')

// 清单来自 docs/data/resources.json，可在 CMS 后台「资料库」中维护。
// url 为 null 表示文件尚未上传，表格中会显示「待上传」。
// 上传文件到 docs/public/files/ 后，把 url 填成 '/files/文件名' 即可启用下载。
const files = resourcesData.files

const filtered = computed(() => {
  if (activeCat.value === '全部') return files
  return files.filter((f) => f.category === activeCat.value)
})
</script>
