<template>
  <div class="bu-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">Brother Union</h1>
        <p class="hero-slogan">凝聚力量，共拓边界</p>
        <div class="hero-actions">
          <a href="/history/" class="hero-btn primary">了解更多</a>
          <a href="/members/" class="hero-btn secondary">认识我们</a>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="section-inner">
        <h2 class="section-title">组织愿景</h2>
        <div class="vision-content">
          <p>
            Brother Union（BU）是一个非商业性质的团体，致力于在共同的价值观和信念基础上，
            凝聚一群志同道合的伙伴，共同探索个人成长与团队协作的无限可能。
          </p>
          <p>
            我们相信，真正的力量来自团结与信任。BU 通过建立开放、包容的交流平台，
            鼓励每位成员发挥所长，在互助中实现自我价值，同时为集体的共同目标贡献力量。
          </p>
          <p>
            无论时代如何变迁，BU 始终坚守初心：以兄弟般的情谊为纽带，
            以专业与热忱为驱动，在各自的领域中发光发热，共同书写属于我们的篇章。
          </p>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="latest-section">
      <div class="section-inner">
        <div class="section-header">
          <h2 class="section-title">最新动态</h2>
          <a href="/news/" class="view-all">查看全部 →</a>
        </div>
        <div class="news-preview-grid">
          <a
            v-for="item in latestNews"
            :key="item.link"
            :href="item.link"
            class="news-preview-card"
          >
            <div class="news-preview-icon">{{ item.icon }}</div>
            <span class="news-preview-tag">{{ item.tag }}</span>
            <h3 class="news-preview-title">{{ item.title }}</h3>
            <p class="news-preview-date">{{ item.date }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="links-section">
      <div class="section-inner">
        <h2 class="section-title">快速指引</h2>
        <div class="quick-links">
          <a href="/history/" class="quick-link">
            <span class="quick-link-icon">⏳</span>
            <span>历史沿革</span>
          </a>
          <a href="/structure/" class="quick-link">
            <span class="quick-link-icon">🏛</span>
            <span>组织架构</span>
          </a>
          <a href="/members/" class="quick-link">
            <span class="quick-link-icon">👥</span>
            <span>人物介绍</span>
          </a>
          <a href="/resources/" class="quick-link">
            <span class="quick-link-icon">📚</span>
            <span>资料库</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const latestNews = [
  {
    icon: '📢',
    tag: '活动总结',
    title: '2026年度春季团建活动圆满举办',
    date: '2026-04-20',
    link: '/news/spring-team-building-2026',
  },
  {
    icon: '🎙',
    tag: '成员专访',
    title: '对话核心层：BU 未来三年的发展方向',
    date: '2026-03-15',
    link: '/news/core-interview-2026',
  },
  {
    icon: '📋',
    tag: '内部通告',
    title: '2026年各部门负责人换届通知',
    date: '2026-02-01',
    link: '/news/leadership-change-2026',
  },
]
</script>

<style scoped>
.bu-home {
  --max-width: 1100px;
}

/* Hero */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f1a2e 0%, #1a2744 40%, #2a3d66 100%);
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(201, 169, 110, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(201, 169, 110, 0.06) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.5rem;
  letter-spacing: 0.05em;
}

.hero-slogan {
  font-size: 1.5rem;
  color: var(--bu-gold);
  margin: 0 0 2.5rem;
  letter-spacing: 0.15em;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.hero-btn.primary {
  background: var(--bu-gold);
  color: var(--bu-navy-dark);
}

.hero-btn.primary:hover {
  background: var(--bu-gold-dark);
  color: #fff;
}

.hero-btn.secondary {
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.hero-btn.secondary:hover {
  border-color: var(--bu-gold);
  color: var(--bu-gold);
}

/* Sections */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--bu-navy);
  margin: 0 0 1.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--bu-gold);
  border-radius: 2px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.view-all {
  color: var(--bu-gold-dark);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
}

.view-all:hover {
  color: var(--bu-navy);
}

/* Vision */
.vision-section {
  background: var(--bu-ivory);
}

.vision-content p {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--bu-text);
  margin: 0 0 1rem;
}

/* News Preview */
.news-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.news-preview-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--bu-border);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.news-preview-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(26, 39, 68, 0.08);
  border-color: var(--bu-gold);
}

.news-preview-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.news-preview-tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  background: var(--bu-ivory-dark);
  color: var(--bu-navy);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.news-preview-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--bu-navy);
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.news-preview-date {
  font-size: 0.8rem;
  color: var(--bu-text-light);
  margin: 0;
}

/* Quick Links */
.links-section {
  background: var(--bu-ivory);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-slogan {
    font-size: 1.1rem;
  }

  .hero-section {
    min-height: 60vh;
  }

  .news-preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
