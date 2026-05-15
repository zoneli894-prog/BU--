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

    <div class="article-list">
      <a
        v-for="article in filtered"
        :key="article.link"
        :href="withBase(article.link)"
        class="article-card"
      >
        <div class="article-card-body">
          <div class="article-meta">
            <span class="article-tag">{{ article.category }}</span>
            <span class="article-date">{{ article.date }}</span>
          </div>
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          <div class="article-footer">
            <span class="article-author">
              <span class="author-dot">{{ article.author[0] }}</span>
              {{ article.author }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const categories = ['全部', '学术思考', '成长感悟', '活动复盘']
const activeCat = ref('全部')

const articles = [
  {
    title: '论非商业组织的可持续发展路径',
    author: '张铭远',
    date: '2026-04-10',
    category: '学术思考',
    summary: '从 BU 的实践出发，探讨非商业性质团体如何在不依赖经济激励的情况下保持组织活力和成员凝聚力。',
    link: '/articles/sustainable-development',
  },
  {
    title: '我在 BU 的三年：从参与者到组织者',
    author: '周天翔',
    date: '2026-03-20',
    category: '成长感悟',
    summary: '回顾自己在 BU 三年的成长历程，从最初的活动参与者到如今的活动部部长，分享组织能力提升的点滴心得。',
    link: '/articles/my-three-years',
  },
  {
    title: '团队协作中的沟通艺术',
    author: '陈嘉慧',
    date: '2026-02-28',
    category: '学术思考',
    summary: '结合 BU 内部协作经验，探讨高效团队沟通的原则、方法和常见误区。',
    link: '/articles/communication-art',
  },
  {
    title: '2025 春季团建复盘：我们做对了什么',
    author: '周天翔',
    date: '2025-05-15',
    category: '活动复盘',
    summary: '对 2025 年春季团建活动进行系统复盘，总结成功经验和改进空间。',
    link: '/articles/spring-review-2025',
  },
  {
    title: '如何在团队中建立真正的信任',
    author: '王承志',
    date: '2025-11-10',
    category: '成长感悟',
    summary: '信任不是口号，而是日复一日的行动积累。分享在 BU 管理实践中关于信任建立的思考。',
    link: '/articles/building-trust',
  },
]

const filtered = computed(() => {
  if (activeCat.value === '全部') return articles
  return articles.filter((a) => a.category === activeCat.value)
})
</script>

<style scoped>
.article-list {
  display: grid;
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.article-card {
  display: flex;
  padding: 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--bu-border);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.article-card:hover {
  box-shadow: 0 4px 20px rgba(26, 39, 68, 0.08);
  border-color: var(--bu-gold);
  transform: translateY(-2px);
}

.article-card-body {
  flex: 1;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.article-tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  background: var(--bu-ivory-dark);
  color: var(--bu-navy);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.article-date {
  font-size: 0.8rem;
  color: var(--bu-text-light);
}

.article-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--bu-navy);
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.article-summary {
  font-size: 0.9rem;
  color: var(--bu-text-light);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.article-footer {
  display: flex;
  align-items: center;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--bu-text);
  font-weight: 500;
}

.author-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bu-navy);
  color: var(--bu-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
