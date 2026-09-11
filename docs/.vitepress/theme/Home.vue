<template>
  <div class="bu-home" :class="{ 'reveal-armed': revealArmed }">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <!-- 2026 团建合影作为背景板。想换图只需替换
             docs/public/images/hero-team-2026.jpg，无需改代码。
             两层分工：外层负责自动推近动画，内层负责指针视差，
             否则两个 transform 会互相覆盖 -->
        <div class="hero-photo">
          <div
            class="hero-photo-img"
            :style="{ backgroundImage: `url('${withBase('/images/hero-team-2026.jpg')}')` }"
          ></div>
        </div>
        <div class="hero-scrim"></div>
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
import newsData from '../../data/home-news.json'

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

// ---------- 背景照片视差 ----------
// 原 Hero 的 Canvas 星空粒子已由 2026 团建合影替代（见模板 .hero-photo）。
// 这里保留鼠标视差：轻微平移照片，让背景与前景文字产生纵深。
let disposeParallax = null

function initParallax() {
  const photo = document.querySelector('.hero-photo-img')
  if (!photo) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer: fine)').matches
  // 视差只在能精确指向的设备上开启；触屏没有 hover，加了反而白费一次合成
  if (reduced || !finePointer) return

  let raf = null
  let tx = 0
  let ty = 0
  let cx = 0
  let cy = 0

  function onPointerMove(e) {
    tx = (e.clientX / window.innerWidth) * 2 - 1
    ty = (e.clientY / window.innerHeight) * 2 - 1
    if (raf) return
    raf = requestAnimationFrame(step)
  }

  function step() {
    // 逐帧逼近目标值，避免背景跟着指针生硬抖动
    cx += (tx - cx) * 0.06
    cy += (ty - cy) * 0.06
    // 位移量刻意压得很小：背景板只是衬托，晃太多既会晕
    // 也会让已放大的照片露出边缘
    photo.style.setProperty('--px', `${(cx * -5).toFixed(2)}px`)
    photo.style.setProperty('--py', `${(cy * -4).toFixed(2)}px`)
    if (Math.abs(tx - cx) < 0.001 && Math.abs(ty - cy) < 0.001) {
      raf = null
      return
    }
    raf = requestAnimationFrame(step)
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  disposeParallax = () => {
    window.removeEventListener('pointermove', onPointerMove)
    if (raf) cancelAnimationFrame(raf)
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
      // 等数字所在的那一批淡入完再开始递增。
      // 之前是立刻开跑，1.5 秒的动画正好被 0.85s + 延迟的入场动画盖住，等于白做。
      if (entry.target === visionSection.value) {
        setTimeout(() => {
          if (revealObserver) runCountUp()
        }, 500)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

  const sections = [visionSection.value, newsSection.value, linksSection.value]
  sections.forEach(el => { if (el) revealObserver.observe(el) })
}

onMounted(() => {
  initParallax()
  initScrollReveal()
})

onUnmounted(() => {
  if (countFrame) cancelAnimationFrame(countFrame)
  if (revealObserver) revealObserver.disconnect()
  if (disposeParallax) disposeParallax()
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
  /* 之前压到 78vh 并收紧内边距，是为了不让下方轮播卡片盖住按钮；
     轮播移除后可以放开，让合影占据更完整的首屏 */
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  /* 兜底底色：照片未加载或加载失败时仍是原来的渐变，不会露出白底 */
  background: linear-gradient(160deg, #0a1120 0%, #1a2744 35%, #1e3050 65%, #0f1a2e 100%);
  z-index: 0;
}

/* --- 背景照片 ---
   合影细节密度很高（树冠、亮地面、几十个人脸），原样铺底会和文字抢读。
   分两层：.hero-photo 跑自动推近，.hero-photo-img 承接指针视差。 */
.hero-photo {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: photoDrift 36s ease-in-out infinite alternate;
}

.hero-photo-img {
  position: absolute;
  inset: 0;
  /* 合影里人物整体偏左，而 cover 在宽屏下裁掉的是上下而非左右，
     所以靠 background-position-x 左移取样窗口，把人物推回画面中央。
     纵向 34%：把取样窗口上提，让照片较亮的中段（而不是底部深色柏油）
     填满下半屏，否则画面下沿会是一条压暗的暗带。 */
  background-position: 30% 34%;
  background-size: cover;
  background-repeat: no-repeat;
  /* 只降饱和与对比，不再压亮度——压暗交给下面的蒙版统一处理，
     两处同时压会把人物压得看不见 */
  filter: saturate(0.55) contrast(0.9);
  /* 放大一点，让视差位移不会露出边缘。
     --px/--py 由 initParallax() 跟随指针写入，默认 0 时不影响静态呈现 */
  transform: scale(1.08) translate3d(var(--px, 0px), var(--py, 0px), 0);
}

@keyframes photoDrift {
  from { transform: scale(1) translate3d(0, 0, 0); }
  to { transform: scale(1.045) translate3d(-1.2%, -0.8%, 0); }
}

/* --- 可读性蒙版 ---
   横向：下深上浅 + 四周压暗，保证左下的按钮和文字始终压在暗部。
   纵向中心开一个柔和亮窗，让合影主体还能被看见。 */
.hero-scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgba(10, 17, 32, 0.58) 0%,
      rgba(10, 17, 32, 0.28) 32%,
      rgba(15, 26, 46, 0.2) 62%,
      rgba(10, 17, 32, 0.3) 100%
    ),
    linear-gradient(
      95deg,
      rgba(26, 39, 68, 0.4) 0%,
      rgba(30, 48, 80, 0.14) 45%,
      rgba(26, 39, 68, 0.34) 100%
    ),
    radial-gradient(
      ellipse 76% 58% at 50% 44%,
      transparent 0%,
      rgba(10, 17, 32, 0.16) 100%
    );
  pointer-events: none;
}

/* 两团缓慢游移的极光，给背景一点呼吸感。
   用 radial-gradient 而非 blur 滤镜，省一层昂贵的模糊合成。
   z-index 3 必须高于蒙版（1），否则会被压在照片底下看不见。
   改用 mix-blend-mode: screen —— 叠加模式下只会提亮，不会像默认的
   normal 那样把照片糊成一层灰雾。 */
.hero-bg::before,
.hero-bg::after {
  content: '';
  position: absolute;
  z-index: 3;
  width: 62vw;
  height: 62vw;
  max-width: 880px;
  max-height: 880px;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: screen;
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

.hero-grain {
  position: absolute;
  inset: 0;
  z-index: 4;
  opacity: 0.2;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
  background-size: 256px;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  z-index: 4;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(10,17,32,0.5) 100%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 5;
  text-align: center;
  padding: 1rem 2rem 2rem;
}

.hero-overline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 0.1s forwards;
}

.hero-overline-text {
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  color: var(--bu-gold);
  font-weight: 600;
  /* 照片背景上金色本身就偏亮，加一层深色描边兜住树冠等亮部 */
  text-shadow: 0 1px 8px rgba(10, 17, 32, 0.85);
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
  /* 双层阴影：近处一层收边压住细节，远处一层柔光把标题从背景里托出来 */
  text-shadow:
    0 2px 12px rgba(10, 17, 32, 0.8),
    0 1px 3px rgba(10, 17, 32, 0.6);
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
  text-shadow:
    0 2px 10px rgba(10, 17, 32, 0.85),
    0 1px 3px rgba(10, 17, 32, 0.7);
  opacity: 0;
  animation: fadeSlideUp 0.8s ease 0.9s forwards;
}

/* 原来只有 45% 白的副标题在纯渐变上勉强能看，压在照片上会直接糊掉，
   因此提高不透明度和字重，并补一层阴影 */
.hero-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 400;
  letter-spacing: 0.15em;
  /* 底下已无轮播卡片，间距可以放开一些 */
  margin: 0 0 2.25rem;
  text-shadow: 0 1px 8px rgba(10, 17, 32, 0.8);
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
  /* 半透明金色：既能看清按钮位置，又不会把人挡实。
     底色仍要够重，否则深蓝文字压在照片上会糊。 */
  background: rgba(201, 169, 110, 0.55);
  color: var(--bu-navy-dark);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  /* 兜一层薄模糊，让按钮底下的照片细节退到后面去，文字更稳 */
  backdrop-filter: blur(5px);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28);
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

/* 悬停时提高不透明度而不是换成实色，避免视觉上突然「变实」 */
.hero-btn.primary:hover {
  background: rgba(212, 184, 122, 0.85);
  transform: translateY(-2px);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.4),
    0 8px 30px rgba(201, 169, 110, 0.25);
}

.hero-btn.primary svg {
  transition: transform 0.3s ease;
}

.hero-btn.primary:hover svg {
  transform: translateX(3px);
}

/* 次要按钮压在照片上时，半透明白字容易和背景细节糊在一起，
   所以加深底色（模糊只负责衬底）并给文字加阴影 */
.hero-btn.secondary {
  border: 1px solid rgba(255, 255, 255, 0.38);
  color: #fff;
  background: rgba(10, 17, 32, 0.32);
  text-shadow: 0 1px 6px rgba(10, 17, 32, 0.8);
  backdrop-filter: blur(6px);
}

.hero-btn.secondary:hover {
  border-color: var(--bu-gold);
  color: var(--bu-gold);
  background: rgba(10, 17, 32, 0.55);
  transform: translateY(-2px);
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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

  /* 背景照片停在初始构图，不做推近漂移（视差在 JS 侧已跳过） */
  .hero-photo {
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
  /* 手机上 36 秒的持续动画不值得那点电，背景固定在初始构图即可 */
  .hero-photo {
    animation: none;
  }

  /* 窄屏下 cover 改为裁掉左右，焦点需要从「偏左的人物」
     移到人物带的中心，纵向略上移避免裁到前排 */
  .hero-photo-img {
    background-position: 44% 42%;
  }

  .hero-section {
    min-height: 86vh;
  }

  /* 3rem 的标题在 390px 屏上实测宽约 325px，而内容区仅 326px——
     只剩 1px 余量，比 iPhone 13 mini 更窄的机器会直接裁掉 "Union"。
     收到 2.6rem 并以 dvw 兜底，避免窄屏溢出。 */
  .hero-content {
    padding: 1rem 1rem 3rem;
  }

  .hero-title {
    font-size: min(2.6rem, 11.5dvw);
  }

  /* 照片背景 + 轮播负边距在窄屏容易顶出横向滚动条；
     clip 不会创建滚动容器，比 hidden 安全 */
  .bu-home {
    overflow-x: clip;
  }

  .hero-slogan {
    font-size: 1.1rem;
    letter-spacing: 0.15em;
  }

  .hero-subtitle {
    font-size: 0.8rem;
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
    font-size: min(2.1rem, 12dvw);
  }

  .hero-slogan {
    font-size: 1rem;
    letter-spacing: 0.1em;
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
