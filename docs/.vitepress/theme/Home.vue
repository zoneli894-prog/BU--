<template>
  <div class="bu-home" :class="{ 'reveal-armed': revealArmed }">
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
          <div class="carousel-sheen"></div>
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
        <div class="vision-label reveal-item" :style="{ '--i': 0 }">
          <span class="vision-label-line"></span>
          <span>ABOUT US</span>
        </div>
        <div class="vision-text">
          <h2 class="section-title reveal-item" :style="{ '--i': 1 }">组织愿景</h2>
          <p class="vision-lead reveal-item" :style="{ '--i': 2 }">
            Brother Union（BU）是一个非商业性质的团体，致力于在共同的价值观和信念基础上，
            凝聚一群志同道合的伙伴，共同探索个人成长与团队协作的无限可能。
          </p>
          <p class="reveal-item" :style="{ '--i': 3 }">
            我们相信，真正的力量来自团结与信任。BU 通过建立开放、包容的交流平台，
            鼓励每位成员发挥所长，在互助中实现自我价值，同时为集体的共同目标贡献力量。
          </p>
          <p class="reveal-item" :style="{ '--i': 4 }">
            无论时代如何变迁，BU 始终坚守初心：以兄弟般的情谊为纽带，
            以专业与热忱为驱动，在各自的领域中发光发热，共同书写属于我们的篇章。
          </p>
        </div>
        <div class="vision-stats">
          <div
            class="stat-item reveal-item"
            v-for="(stat, i) in stats"
            :key="stat.label"
            :style="{ '--i': 5 + i }"
          >
            <span class="stat-number">{{ statDisplay[i] }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="latest-section" ref="newsSection">
      <div class="section-inner">
        <div class="section-header reveal-item" :style="{ '--i': 0 }">
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
            class="news-preview-card reveal-item"
            :style="{ '--i': 1 + i }"
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
        <span class="section-eyebrow reveal-item" :style="{ '--i': 0 }">EXPLORE</span>
        <h2 class="section-title reveal-item" :style="{ '--i': 1 }">快速指引</h2>
        <div class="quick-links">
          <a
            v-for="(link, i) in quickLinks"
            :key="link.href"
            :href="link.href"
            class="quick-link reveal-item"
            :style="{ '--i': 2 + i }"
            :target="link.newTab ? '_blank' : undefined"
            :rel="link.newTab ? 'noopener noreferrer' : undefined"
          >
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
import { ref, onMounted, onUnmounted } from 'vue'
import slidesData from '../../data/home-slides.json'
import newsData from '../../data/home-news.json'

const heroCanvas = ref(null)
const visionSection = ref(null)
const newsSection = ref(null)
const linksSection = ref(null)

// 入场动画的「上膛」开关。只有 JS 跑起来才会置为 true 并隐藏待入场元素，
// 这样脚本加载失败时页面只是少了动画，不会变成一片空白。
const revealArmed = ref(false)

const stats = [
  { value: '8', label: '年历程' },
  { value: '42', label: '位成员' },
  { value: '6', label: '大部门' },
  { value: '100+', label: '场活动' },
]

// 滚到组织愿景时才从 0 递增上去，初始即为终值以免无 JS 时显示成 0
const statDisplay = ref(stats.map(s => s.value))

const quickLinks = [
  { icon: '⏳', label: '历史沿革', desc: '八年成长之路', href: withBase('/history/') },
  { icon: '🏛', label: '组织架构', desc: '主席团与六大部门', href: withBase('/structure/') },
  { icon: '👥', label: '人物介绍', desc: '认识每一位成员', href: withBase('/members/') },
  { icon: '📚', label: '资料库', desc: '文档与资源下载', href: withBase('/resources/') },
  { icon: '✍️', label: '成员文章', desc: '思考、感悟与复盘', href: withBase('/articles/') },
  // 2048 是独立页面、无站内导航，故新标签页打开，避免访客无法返回本站
  { icon: '🎮', label: '2048 小游戏', desc: '合并 BU 成员卡片', href: withBase('/2048/'), newTab: true },
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

// ---------- Hero 粒子 ----------
// 三层景深：远的更小更暗更慢，近的更大更亮更快，再叠上鼠标视差拉开空间感。
// 光点用预渲染的辉光贴图 drawImage 绘制，比逐个 arc + shadowBlur 便宜得多。
let animFrame = null
let disposeCanvas = null

function makeGlowSprite(rgb) {
  const size = 64
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')
  const r = size / 2
  const grad = g.createRadialGradient(r, r, 0, r, r, r)
  const [cr, cg, cb] = rgb
  grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 1)`)
  grad.addColorStop(0.22, `rgba(${cr}, ${cg}, ${cb}, 0.42)`)
  grad.addColorStop(0.55, `rgba(${cr}, ${cg}, ${cb}, 0.09)`)
  grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return c
}

function initCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer: fine)').matches

  // 只能在浏览器里创建，SSR 阶段没有 document
  const sprites = [
    makeGlowSprite([150, 178, 220]), // 远景偏冷
    makeGlowSprite([196, 182, 158]), // 中景过渡
    makeGlowSprite([201, 169, 110]), // 近景香槟金
  ]

  let w = 0
  let h = 0
  let particles = []
  let time = 0
  // tx/ty 是鼠标目标值，x/y 逐帧逼近，避免粒子跟着指针生硬抖动
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = canvas.offsetWidth
    h = canvas.offsetHeight
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    // 用 setTransform 而不用 scale：反复 resize 时缩放不会层层累加
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function createParticles() {
    const count = Math.min(70, Math.max(22, Math.floor((w * h) / 22000)))
    particles = []
    for (let i = 0; i < count; i++) {
      const z = Math.random() // 0 = 最远，1 = 最近
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z,
        vx: (Math.random() - 0.5) * (0.06 + z * 0.3),
        vy: (Math.random() - 0.5) * (0.06 + z * 0.3) - z * 0.05,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.5 + Math.random() * 1.1,
      })
    }
  }

  function render() {
    ctx.clearRect(0, 0, w, h)
    pointer.x += (pointer.tx - pointer.x) * 0.05
    pointer.y += (pointer.ty - pointer.y) * 0.05

    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy

      // 越界后从另一侧回绕，比反弹更不容易被看出规律
      if (p.x < -60) p.x = w + 60
      else if (p.x > w + 60) p.x = -60
      if (p.y < -60) p.y = h + 60
      else if (p.y > h + 60) p.y = -60

      const size = 10 + p.z * 34
      const alpha = (0.08 + p.z * 0.42) * (0.6 + 0.4 * Math.sin(time * p.twinkle + p.phase))
      const x = p.x - pointer.x * (8 + p.z * 34)
      const y = p.y - pointer.y * (6 + p.z * 22)
      const sprite = sprites[p.z < 0.45 ? 0 : p.z < 0.8 ? 1 : 2]

      ctx.globalAlpha = alpha > 0 ? alpha : 0
      ctx.drawImage(sprite, x - size / 2, y - size / 2, size, size)
    }
    ctx.globalAlpha = 1
  }

  function loop(now) {
    time = now / 1000
    render()
    animFrame = requestAnimationFrame(loop)
  }

  function onPointerMove(e) {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1
  }

  let resizeRaf = null
  function onResize() {
    if (resizeRaf) cancelAnimationFrame(resizeRaf)
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = null
      resize()
      createParticles()
      if (reduced) render()
    })
  }

  // 切到后台标签页时停掉循环，别白烧电
  function onVisibilityChange() {
    if (reduced) return
    if (document.hidden) {
      if (animFrame) {
        cancelAnimationFrame(animFrame)
        animFrame = null
      }
    } else if (!animFrame) {
      animFrame = requestAnimationFrame(loop)
    }
  }

  resize()
  createParticles()
  window.addEventListener('resize', onResize)

  if (reduced) {
    // 尊重「减少动态效果」：只画一帧静态星空，不跑动画循环
    render()
  } else {
    animFrame = requestAnimationFrame(loop)
    if (finePointer) window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
  }

  // 卸载时统一摘掉监听，否则 HMR / 路由切换后会残留
  disposeCanvas = () => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('pointermove', onPointerMove)
    document.removeEventListener('visibilitychange', onVisibilityChange)
    if (resizeRaf) cancelAnimationFrame(resizeRaf)
  }
}

// ---------- 滚动入场 ----------
let revealObserver = null
let countFrame = null

// 让统计数字从 0 走到目标值，保留 '100+' 这类后缀
function runCountUp() {
  const DURATION = 1500
  const start = performance.now()
  function step(now) {
    const t = Math.min(1, (now - start) / DURATION)
    const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
    statDisplay.value = stats.map(s => {
      const m = /^(\d+)(.*)$/.exec(s.value)
      return m ? Math.round(Number(m[1]) * eased) + m[2] : s.value
    })
    if (t < 1) countFrame = requestAnimationFrame(step)
  }
  countFrame = requestAnimationFrame(step)
}

function initScrollReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return // 不做入场动画，内容保持直接可见

  // 先「上膛」再开始观察，此时首帧尚未绘制，不会有内容闪现再消失
  revealArmed.value = true
  statDisplay.value = stats.map(() => '0')

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('revealed')
      revealObserver.unobserve(entry.target)
      if (entry.target === visionSection.value) runCountUp()
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

  const sections = [visionSection.value, newsSection.value, linksSection.value]
  sections.forEach(el => { if (el) revealObserver.observe(el) })
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
  if (countFrame) cancelAnimationFrame(countFrame)
  if (revealObserver) revealObserver.disconnect()
  if (disposeCanvas) disposeCanvas()
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

/* 两团缓慢游移的极光，给纯渐变底色一点呼吸感。
   用 radial-gradient 而非 blur 滤镜，省一层昂贵的模糊合成。 */
.hero-bg::before,
.hero-bg::after {
  content: '';
  position: absolute;
  width: 62vw;
  height: 62vw;
  max-width: 880px;
  max-height: 880px;
  border-radius: 50%;
  pointer-events: none;
}

.hero-bg::before {
  top: -20%;
  left: -12%;
  background: radial-gradient(
    circle,
    rgba(201, 169, 110, 0.2) 0%,
    rgba(201, 169, 110, 0.06) 42%,
    transparent 70%
  );
  animation: auroraDriftA 26s ease-in-out infinite alternate;
}

.hero-bg::after {
  right: -14%;
  bottom: -24%;
  background: radial-gradient(
    circle,
    rgba(84, 132, 204, 0.26) 0%,
    rgba(84, 132, 204, 0.07) 45%,
    transparent 72%
  );
  animation: auroraDriftB 34s ease-in-out infinite alternate;
}

@keyframes auroraDriftA {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to { transform: translate3d(12vw, 9vh, 0) scale(1.22); }
}

@keyframes auroraDriftB {
  from { transform: translate3d(0, 0, 0) scale(1.1); }
  to { transform: translate3d(-11vw, -7vh, 0) scale(0.94); }
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

/* 必须 inline-block，否则 width 对行内元素无效，"Brother" 和 "Union" 会粘在一起 */
.hero-title-space {
  display: inline-block;
  width: 0.35em;
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
  position: relative;
  overflow: hidden;
  padding: 0.85rem 2.2rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.05em;
  /* 逐项声明代替 transition: all，避免无意中给布局属性加过渡 */
  transition:
    background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-btn.primary {
  background: var(--bu-gold);
  color: var(--bu-navy-dark);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* 悬停时一道高光扫过，比单纯变色更有质感 */
.hero-btn.primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 38%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 62%
  );
  transform: translateX(-110%);
  transition: transform 0.7s ease;
  pointer-events: none;
}

.hero-btn.primary:hover::after {
  transform: translateX(110%);
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

/* 缓慢推近的 Ken Burns 效果，让静止的渐变背景也有呼吸 */
.carousel-slide-bg,
.carousel-slide-pattern {
  position: absolute;
  inset: 0;
  transform: scale(1);
  transition: transform 8s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.carousel-slide.active .carousel-slide-bg,
.carousel-slide.active .carousel-slide-pattern {
  transform: scale(1.12);
}

.carousel-slide-pattern {
  background-image:
    radial-gradient(circle at 20% 80%, rgba(201,169,110,0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(201,169,110,0.05) 0%, transparent 40%);
}

/* 每次切到这一张时扫过一道金光 */
.carousel-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(201, 169, 110, 0.16) 47%,
    rgba(255, 255, 255, 0.07) 52%,
    transparent 66%
  );
  transform: translateX(-120%);
  pointer-events: none;
}

.carousel-slide.active .carousel-sheen {
  animation: sheenSweep 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

@keyframes sheenSweep {
  from { transform: translateX(-120%); }
  to { transform: translateX(120%); }
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

/* 徽标 → 标题 → 副标题依次浮起。
   用 backwards 填充而非 forwards：动画结束后不残留 transform，
   元素回到自身样式，不会把别处定义的位移锁死。 */
.carousel-slide.active .carousel-badge,
.carousel-slide.active .carousel-title,
.carousel-slide.active .carousel-subtitle {
  animation: carouselIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.carousel-slide.active .carousel-badge { animation-delay: 0.2s; }
.carousel-slide.active .carousel-title { animation-delay: 0.32s; }
.carousel-slide.active .carousel-subtitle { animation-delay: 0.44s; }

@keyframes carouselIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition:
    background-color 0.4s ease,
    width 0.4s ease;
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
  letter-spacing: 0.03em;
  transition: color 0.3s ease;
}

.view-all svg {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.view-all:hover {
  color: var(--bu-navy);
}

/* 改位移箭头而不改 gap，避免 hover 时触发重排 */
.view-all:hover svg {
  transform: translateX(3px);
}

/* ========== Scroll Reveal ========== */
/* .revealed 由 IntersectionObserver 加在 <section> 上，子元素靠它触发动画。
   隐藏态只在 .reveal-armed（JS 就绪）下生效，脚本失效时内容照常可见；
   显示态显式写 opacity: 1，否则动画播完后元素会落回隐藏规则再次消失。 */
.bu-home.reveal-armed .reveal-item {
  opacity: 0;
}

.bu-home.reveal-armed .revealed .reveal-item {
  opacity: 1;
  animation: revealUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  animation-delay: calc(var(--i, 0) * 70ms);
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== Vision ========== */
.vision-section {
  background: var(--bu-ivory);
  overflow: hidden;
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
  position: relative;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 悬停时顶部划出一道金线 */
.news-preview-card::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  height: 2px;
  border-radius: 6px 6px 0 0;
  background: linear-gradient(90deg, var(--bu-gold), var(--bu-gold-light), var(--bu-gold));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.news-preview-card:hover::before {
  transform: scaleX(1);
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
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.news-preview-card:hover .news-preview-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ========== Quick Links ========== */
.links-section {
  background: var(--bu-ivory);
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
  transition:
    background-color 0.35s ease,
    border-color 0.35s ease;
}

.quick-link:first-child {
  border-radius: 6px 6px 0 0;
}

.quick-link:last-child {
  border-radius: 0 0 6px 6px;
}

/* 用 transform 位移内部内容，而不是给整行加 padding-left：
   后者每帧都在触发布局重排，且行会整体错位露出底色 */
.quick-link:hover {
  background: var(--bu-navy);
  border-color: var(--bu-navy);
}

.quick-link:hover .quick-link-text {
  transform: translateX(6px);
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
  transition:
    background-color 0.35s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.quick-link:hover .quick-link-icon {
  background: rgba(201,169,110,0.15);
  transform: scale(1.08);
}

.quick-link-text {
  flex: 1;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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

/* ========== Reduced Motion ========== */
/* 系统里关掉动效的用户一律不给动画，只保留静态呈现。
   JS 侧已跳过「上膛」，这里再兜一层，覆盖纯 CSS 的那几个动画。 */
@media (prefers-reduced-motion: reduce) {
  .hero-overline,
  .hero-slogan,
  .hero-subtitle,
  .hero-actions {
    opacity: 1;
    animation: none;
  }

  .hero-title-char {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .hero-bg::before,
  .hero-bg::after {
    animation: none;
  }

  .carousel-slide-bg,
  .carousel-slide-pattern,
  .carousel-slide.active .carousel-slide-bg,
  .carousel-slide.active .carousel-slide-pattern {
    transform: none;
    transition: none;
  }

  /* 扫光保持停在屏外的默认位置，复位 transform 反而会让它停在画面正中 */
  .carousel-sheen,
  .carousel-slide.active .carousel-sheen,
  .carousel-slide.active .carousel-badge,
  .carousel-slide.active .carousel-title,
  .carousel-slide.active .carousel-subtitle {
    animation: none;
  }

  .bu-home.reveal-armed .reveal-item {
    opacity: 1;
    animation: none;
  }

  .hero-btn.primary::after {
    display: none;
  }
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
