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
      <div
        v-for="article in filtered"
        :key="article.link"
        class="article-card"
      >
        <div class="article-card-body">
          <div class="article-meta">
            <span class="article-tag">{{ article.category }}</span>
            <span class="article-date">{{ article.date }}</span>
          </div>
          <h3 class="article-title">
            <!-- 用拉伸遮罩让整张卡片可点；作者链接单独抬起一层，
                 这样既有整卡点击，又不会出现 <a> 套 <a> 的非法结构 -->
            <a class="article-title-link" :href="withBase(article.link)">{{ article.title }}</a>
          </h3>
          <p class="article-summary">{{ article.summary }}</p>
          <div class="article-footer">
            <a
              v-if="article.authorLink"
              :href="withBase(article.authorLink)"
              class="article-author article-author--link"
            >
              <span class="author-dot">{{ article.author[0] }}</span>
              {{ article.author }}
            </a>
            <span v-else class="article-author">
              <span class="author-dot">{{ article.author[0] }}</span>
              {{ article.author }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import articlesData from '../../data/articles.json'

const categories = ['全部', '学术思考', '成长感悟', '活动复盘']
const activeCat = ref('全部')

// 文章清单来自 docs/data/articles.json，可在 CMS 后台「成员文章」中维护。
// 注意：新增文章后需要在 CMS 里同步补一条清单记录，列表页才会显示。
const articles = articlesData.articles

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
  /* 标题链接用绝对定位铺满卡片，需要卡片作为定位参照 */
  position: relative;
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

/* 标题链接铺满整张卡片（stretched link），点卡片任意处都能进文章 */
.article-title-link {
  color: inherit;
  text-decoration: none;
}

.article-title-link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
}

/* 焦点环画在卡片上，避免铺满的伪元素把轮廓挤出可视区 */
.article-card:focus-within {
  border-color: var(--bu-gold);
  box-shadow: 0 0 0 2px var(--bu-gold-light);
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

/* 作者名可点到成员详情页；带条下划线暗示可点，避免被误认成纯文本。
   同时抬到卡片遮罩之上，否则点作者会被整卡链接抢走 */
.article-author--link {
  position: relative;
  z-index: 1;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    color 0.25s ease,
    border-color 0.25s ease;
}

.article-author--link:hover {
  color: var(--bu-gold-dark);
  border-bottom-color: var(--bu-gold);
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
