<template>
  <div class="bu-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <canvas ref="heroCanvas" class="hero-canvas"></canvas>
        <div class="hero-grain"></div>
        <div class="hero-vignette"></div>
      </div>
      <div class="hero-content">
        <div class="hero-overline">
          <span class="hero-line"></span>
          <span class="hero-overline-text">EST. 2018</span>
          <span class="hero-line"></span>
        </div>
        <h1 class="hero-title">
          <span class="hero-title-char" v-for="(char, i) in 'Brother'" :key="'b'+i" :style="{animationDelay: (0.3 + i*0.05)+'s'}">{{ char }}</span>
          <span class="hero-title-space"> </span>
          <span class="hero-title-char" v-for="(char, i) in 'Union'" :key="'u'+i" :style="{animationDelay: (0.65 + i*0.05)+'s'}">{{ char }}</span>
        </h1>
        <p class="hero-slogan">凝聚力量，共拓边界</p>
        <p class="hero-subtitle">非商业性质团体 · 志同道合 · 共同成长</p>
        <div class="hero-actions">
          <a :href="withBase('/history/')" class="hero-btn primary">
            <span>了解更多</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a :href="withBase('/members/')" class="hero-btn secondary">认识我们</a>
        </div>
      </div>
    </section>

    <!-- Carousel Section -->
    <section class="carousel-section">
      <div class="carousel">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="carousel-slide"
          :class="{ active: currentSlide === i }"
        >
          <div class="carousel-slide-bg" :style="{ background: slide.bg }"></div>
          <div class="carousel-slide-pattern"></div>
          <div class="carousel-content">
            <span class="carousel-badge">{{ slide.badge }}</span>
            <h3 class="carousel-title">{{ slide.title }}</h3>
            <p class="carousel-subtitle">{{ slide.subtitle }}</p>
          </div>
        </div>
        <div class="carousel-controls">
          <div class="carousel-dots">
            <button
              v-for="(_, i) in slides"
              :key="i"
              class="carousel-dot"
              :class="{ active: currentSlide === i }"
              @click="goToSlide(i)"
              :aria-label="'Slide ' + (i+1)"
            ></button>
          </div>
          <div class="carousel-progress">
            <div class="carousel-progress-bar" :style="{width: progressWidth + '%'}"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section" ref="visionSection">
      <div class="section-inner vision-layout">
        <div class="vision-label">
          <span class="vision-label-line"></span>
          <span>ABOUT US</span>
        </div>
        <div class="vision-text">
          <h2 class="section-title">组织愿景</h2>
          <p class="vision-lead">
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
        <div class="vision-stats">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <span class="stat-number">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="latest-section" ref="newsSection">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <span class="section-eyebrow">LATEST NEWS</span>
            <h2 class="section-title">最新动态</h2>
          </div>
          <a :href="withBase('/news/')" class="view-all">
            查看全部
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
        <div class="news-preview-grid">
          <a
            v-for="(item, i) in latestNews"
            :key="item.link"
            :href="item.link"
            class="news-preview-card"
            :style="{animationDelay: (i * 0.12) + 's'}"
          >
            <div class="news-preview-top">
              <span class="news-preview-tag">{{ item.tag }}</span>
              <span class="news-preview-date">{{ item.date }}</span>
            </div>
            <h3 class="news-preview-title">{{ item.title }}</h3>
            <div class="news-preview-arrow">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="links-section" ref="linksSection">
      <div class="section-inner">
        <span class="section-eyebrow">EXPLORE</span>
        <h2 class="section-title">快速指引</h2>
        <div class="quick-links">
          <a v-for="link in quickLinks" :key="link.href" :href="link.href" class="quick-link">
            <div class="quick-link-icon">
              <span>{{ link.icon }}</span>
            </div>
            <div class="quick-link-text">
              <span class="quick-link-label">{{ link.label }}</span>
              <span class="quick-link-desc">{{ link.desc }}</span>
            </div>
            <div class="quick-link-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer Accent -->
    <div class="footer-accent">
      <div class="accent-line"></div>
      <span class="accent-mark">BU</span>
      <div class="accent-line"></div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import slidesData from '../../data/home-slides.json'
import newsData from '../../data/home-news.json'

const heroCanvas = ref(null)
const visionSection = ref(null)
const newsSection = ref(null)
const linksSection = ref(null)

const stats = [
  { value: '8', label: '年历程' },
  { value: '42', label: '位成员' },
  { value: '5', label: '大部门' },
  { value: '100+', label: '场活动' },
]

const quickLinks = [
  { icon: '⏳', label: '历史沿革', desc: '八年成长之路', href: withBase('/history/') },
  { icon: '🏛', label: '组织架构', desc: '主席团与五部门', href: withBase('/structure/') },
  { icon: '👥', label: '人物介绍', desc: '认识每一位成员', href: withBase('/members/') },
  { icon: '📚', label: '资料库', desc: '文档与资源下载', href: withBase('/resources/') },
  { icon: '✍️', label: '成员文章', desc: '思考、感悟与复盘', href: withBase('/articles/') },
]

const latestNews = newsData.news.map(item => ({
  ...item,
  link: withBase(item.link)
}))

const slides = slidesData.slides

const currentSlide = ref(0)
const progressWidth = ref(0)
let timer = null
let progressTimer = null
const PROGRESS_INTERVAL = 50
const SLIDE_DURATION = 5000

function startProgress() {
  progressWidth.value = 0
  clearInterval(progressTimer)
  progressTimer = setInterval(() => {
    progressWidth.value += (PROGRESS_INTERVAL / SLIDE_DURATION) * 100
    if (progressWidth.value >= 100) {
      progressWidth.value = 100
    }
  }, PROGRESS_INTERVAL)
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  startProgress()
}

function goToSlide(i) {
  currentSlide.value = i
  clearInterval(timer)
  timer = setInterval(nextSlide, SLIDE_DURATION)
  startProgress()
}

// Hero canvas particle system
let animFrame = null
function initCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let w, h, particles = []

  function resize() {
    w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1)
    h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
  }

  function createParticles() {
    particles = []
    const count = Math.min(60, Math.floor((w * h) / 25000))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(201, 169, 110, ${0.06 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(201, 169, 110, ${p.opacity})`
      ctx.fill()

      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
      if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1
    }

    animFrame = requestAnimationFrame(draw)
  }

  resize()
  createParticles()
  draw()
  window.addEventListener('resize', () => { resize(); createParticles() })
}

// Scroll reveal
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  const sections = [visionSection.value, newsSection.value, linksSection.value]
  sections.forEach(el => { if (el) observer.observe(el) })
}

onMounted(() => {
  initCanvas()
  initScrollReveal()
  timer = setInterval(nextSlide, SLIDE_DURATION)
  startProgress()
})

onUnmounted(() => {
  clearInterval(timer)
  clearInterval(progressTimer)
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<style scoped>
.bu-home {
  --max-width: 1100px;
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', -apple-system, sans-serif;
}

/* ========== Hero ========== */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, #0a1120 0%, #1a2744 35%, #1e3050 65%, #0f1a2e 100%);
  z-index: 0;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.3;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
  background-size: 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(10,17,32,0.5) 100%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem;
}

.hero-overline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 0.1s forwards;
}

.hero-overline-text {
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  color: var(--bu-gold);
  font-weight: 600;
}

.hero-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--bu-gold), transparent);
}

.hero-title {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 5.5rem;
  font-weight: 300;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: 0.08em;
  line-height: 1.1;
}

.hero-title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: charReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-title-space {
  width: 0.4em;
}

@keyframes charReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-slogan {
  font-size: 1.4rem;
  color: var(--bu-gold);
  margin: 0 0 0.75rem;
  letter-spacing: 0.25em;
  font-weight: 500;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 0.9s forwards;
}

.hero-subtitle {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.15em;
  margin: 0 0 3rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 1.1s forwards;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 1.3s forwards;
}

.hero-btn {
  padding: 0.85rem 2.2rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  letter-spacing: 0.05em;
}

.hero-btn.primary {
  background: var(--bu-gold);
  color: var(--bu-navy-dark);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-btn.primary:hover {
  background: #d4b87a;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201,169,110,0.25);
}

.hero-btn.primary svg {
  transition: transform 0.3s ease;
}

.hero-btn.primary:hover svg {
  transform: translateX(3px);
}

.hero-btn.secondary {
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.8);
  backdrop-filter: blur(4px);
}

.hero-btn.secondary:hover {
  border-color: var(--bu-gold);
  color: var(--bu-gold);
  background: rgba(201,169,110,0.06);
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ========== Carousel ========== */
.carousel-section {
  padding: 0 2rem;
  max-width: 1100px;
  margin: -4rem auto 0;
  position: relative;
  z-index: 4;
}

.carousel {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(10,17,32,0.25),
    0 0 0 1px rgba(201,169,110,0.08);
  aspect-ratio: 21 / 9;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide-bg {
  position: absolute;
  inset: 0;
}

.carousel-slide-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(201,169,110,0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(201,169,110,0.05) 0%, transparent 40%);
}

.carousel-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
}

.carousel-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border: 1px solid rgba(201,169,110,0.4);
  border-radius: 2px;
  color: var(--bu-gold);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
  font-weight: 500;
}

.carousel-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
  letter-spacing: 0.08em;
}

.carousel-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  margin: 0;
  letter-spacing: 0.1em;
}

.carousel-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-bottom: 1rem;
}

.carousel-dot {
  width: 24px;
  height: 3px;
  border: none;
  border-radius: 2px;
  background: rgba(255,255,255,0.2);
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 0;
}

.carousel-dot.active {
  background: var(--bu-gold);
  width: 36px;
}

.carousel-dot:hover {
  background: rgba(201,169,110,0.5);
}

.carousel-progress {
  height: 2px;
  background: rgba(255,255,255,0.08);
}

.carousel-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--bu-gold), var(--bu-gold-light));
  transition: width 0.05s linear;
}

/* ========== Shared Section Styles ========== */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.5rem 2rem;
}

.section-eyebrow {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: var(--bu-gold-dark);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.section-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--bu-navy);
  margin: 0 0 0.75rem;
  position: relative;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.75rem;
}

.section-header .section-title {
  margin-bottom: 0;
}

.view-all {
  color: var(--bu-gold-dark);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.3s;
  letter-spacing: 0.03em;
}

.view-all:hover {
  color: var(--bu-navy);
  gap: 0.5rem;
}

/* ========== Vision ========== */
.vision-section {
  background: var(--bu-ivory);
  overflow: hidden;
}

.vision-layout {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.vision-layout.revealed {
  opacity: 1;
  transform: translateY(0);
}

.vision-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: var(--bu-gold-dark);
  font-weight: 600;
}

.vision-label-line {
  width: 30px;
  height: 1px;
  background: var(--bu-gold);
}

.vision-text {
  max-width: 720px;
}

.vision-text .section-title {
  margin-bottom: 0.5rem;
}

.vision-lead {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--bu-navy);
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.vision-text p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--bu-text-light);
  margin: 0 0 0.4rem;
}

.vision-stats {
  display: flex;
  gap: 0;
  margin-top: 1rem;
  border-top: 1px solid var(--bu-border);
}

.stat-item {
  flex: 1;
  padding: 1rem;
  border-right: 1px solid var(--bu-border);
  text-align: center;
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  display: block;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--bu-navy);
  line-height: 1;
  margin-bottom: 0.2rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--bu-text-light);
  letter-spacing: 0.1em;
}

/* ========== News ========== */
.news-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.news-preview-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--bu-border);
  border-radius: 6px;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.news-preview-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(26,39,68,0.1);
  border-color: var(--bu-gold);
}

.news-preview-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.news-preview-tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: var(--bu-navy);
  color: var(--bu-gold);
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.news-preview-date {
  font-size: 0.75rem;
  color: var(--bu-text-light);
  letter-spacing: 0.03em;
}

.news-preview-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--bu-navy);
  margin: 0;
  line-height: 1.5;
  flex: 1;
}

.news-preview-arrow {
  margin-top: 0.75rem;
  color: var(--bu-gold);
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.news-preview-card:hover .news-preview-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ========== Quick Links ========== */
.links-section {
  background: var(--bu-ivory);
}

.links-section .section-inner {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.links-section .section-inner.revealed {
  opacity: 1;
  transform: translateY(0);
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid transparent;
  border-radius: 0;
  text-decoration: none;
  color: var(--bu-navy);
  transition: all 0.3s ease;
}

.quick-link:first-child {
  border-radius: 6px 6px 0 0;
}

.quick-link:last-child {
  border-radius: 0 0 6px 6px;
}

.quick-link:hover {
  background: var(--bu-navy);
  border-color: var(--bu-navy);
  padding-left: 2rem;
}

.quick-link:hover .quick-link-label {
  color: #fff;
}

.quick-link:hover .quick-link-desc {
  color: rgba(255,255,255,0.5);
}

.quick-link:hover .quick-link-icon span {
  filter: grayscale(0);
}

.quick-link:hover .quick-link-arrow {
  opacity: 1;
  transform: translateX(0);
}

.quick-link-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bu-ivory-dark);
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: background 0.3s;
}

.quick-link:hover .quick-link-icon {
  background: rgba(201,169,110,0.15);
}

.quick-link-text {
  flex: 1;
}

.quick-link-label {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.quick-link-desc {
  display: block;
  font-size: 0.8rem;
  color: var(--bu-text-light);
  margin-top: 0.15rem;
  transition: color 0.3s;
}

.quick-link-arrow {
  color: var(--bu-gold);
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

/* ========== Footer Accent ========== */
.footer-accent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  background: var(--bu-ivory);
}

.accent-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--bu-border), transparent);
}

.accent-mark {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--bu-gold-dark);
  letter-spacing: 0.3em;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero-section {
    min-height: 85vh;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-slogan {
    font-size: 1.1rem;
    letter-spacing: 0.15em;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .carousel-section {
    margin-top: -3rem;
    padding: 0 1rem;
  }

  .carousel {
    aspect-ratio: 16 / 9;
  }

  .carousel-title {
    font-size: 1.4rem;
  }

  .carousel-subtitle {
    font-size: 0.85rem;
  }

  .section-inner {
    padding: 1.5rem 1.25rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .news-preview-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .vision-stats {
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 0 0 50%;
    border-bottom: 1px solid var(--bu-border);
  }

  .stat-item:nth-child(2) {
    border-right: none;
  }

  .stat-number {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-btn {
    width: 100%;
    max-width: 240px;
    justify-content: center;
  }
}
</style>
