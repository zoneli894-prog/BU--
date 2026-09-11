<template>
  <div class="bu-timeline" :class="{ 'reveal-armed': revealArmed }">
    <div
      v-for="(item, index) in events"
      :key="index"
      class="timeline-item"
      :class="{ visible: visibleItems.has(index) }"
      :style="{ transitionDelay: staggerDelay(index) }"
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

// 入场动画的「上膛」开关，与 Home.vue 同一套约定：
// 隐藏态只在 JS 就绪后生效，脚本挂了页面只是没动画，而不会整页空白。
const revealArmed = ref(false)

// 节点逐个浮现，避免 8 张卡片同时亮起。超过 5 个之后不再叠加，
// 否则末尾节点要等将近 1 秒才出现。
function staggerDelay(index) {
  return `${Math.min(index, 5) * 90}ms`
}

let observer = null

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  observer = new IntersectionObserver(
    (entries) => {
      // 一批可能同时进入视口，累积到一个新 Set 后只赋值一次，
      // 避免同一帧内触发多次响应式更新
      let next = visibleItems.value
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const idx = Number(entry.target.dataset.index)
        if (next.has(idx)) return
        if (next === visibleItems.value) next = new Set(next)
        next.add(idx)
      })
      if (next !== visibleItems.value) visibleItems.value = next
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  const items = document.querySelectorAll('.timeline-item')

  // 必须先上膛再开始观察：观察者的首次回调是异步的，
  // 若顺序反过来，首屏节点会先按可见状态画一帧、再被隐藏，产生闪烁
  if (!reduced) revealArmed.value = true

  items.forEach((el, i) => {
    el.dataset.index = i
    // 关掉动效时无需观察，内容本来就可见
    if (!reduced) observer.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
