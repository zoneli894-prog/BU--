<template>
  <div class="bu-timeline">
    <div
      v-for="(item, index) in events"
      :key="index"
      ref="itemRefs"
      class="timeline-item"
      :class="{ visible: visibleItems.has(index) }"
    >
      <div class="timeline-card">
        <span class="timeline-year">{{ item.year }}</span>
        <h3 class="timeline-title">{{ item.title }}</h3>
        <p class="timeline-desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import timelineData from '../../data/timeline.json'

const events = timelineData.nodes

const visibleItems = ref(new Set())
const itemRefs = ref([])
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.index)
          visibleItems.value = new Set([...visibleItems.value, idx])
        }
      })
    },
    { threshold: 0.2 }
  )

  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.dataset.index = i
    observer.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
