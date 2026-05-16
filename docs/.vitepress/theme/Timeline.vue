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

const events = [
  {
    year: '2018',
    title: '成员初聚',
    desc: 'BU现有的主要成员由小升初进入同一学校，开始了初步认识和交流，初步奠定了未来合作的基础。',
  },
  {
    year: '2019-2020',
    title: '进一步发展',
    desc: 'BU的首批成员之间逐步建立了紧密的联系，合作不断深化，进一步奠定了组织建立的基础。',
  },
  {
    year: '2021',
    title: '组织成立',
    desc: 'BU的前身姐妹帮短暂地存在了一段时间，后因遭受cys的定点打击导致覆灭。但成员不久在吸取了经验教训后，重新聚集并正式成立了BU。',
  },
  {
    year: '2022',
    title: '成员突破 50 人',
    desc: 'BU的第二批成员通过推荐制稳步扩展，成员总数突破 50 人，涵盖多个领域和专业方向。',
  },
  {
    year: '2023',
    title: '数字化转型',
    desc: '启动内部知识管理系统建设，推动文件归档、流程标准化和线上协作工具的全面部署。',
  },
  {
    year: '2024',
    title: '五周年庆典',
    desc: '举办成立五周年系列纪念活动，回顾发展历程，表彰杰出贡献者，并发布新版组织章程。',
  },
  {
    year: '2025',
    title: '战略升级',
    desc: '核心层完成战略规划，明确未来三年发展方向，在成员培养和社会公益方面设立新目标。',
  },
  {
    year: '2026',
    title: '官方网站上线',
    desc: 'BU 官方网站正式上线，实现了信息透明化和对外展示的新里程碑。',
  },
]

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
