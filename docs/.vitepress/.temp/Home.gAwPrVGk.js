import { ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { w as withBase } from "./Content.mbudDdU6.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const latestNews = [
      {
        icon: "📢",
        tag: "活动总结",
        title: "2026年度春季团建活动圆满举办",
        date: "2026-04-20",
        link: withBase("/news/spring-team-building-2026")
      },
      {
        icon: "🎙",
        tag: "成员专访",
        title: "对话核心层：BU 未来三年的发展方向",
        date: "2026-03-15",
        link: withBase("/news/core-interview-2026")
      },
      {
        icon: "📋",
        tag: "内部通告",
        title: "2026年各部门负责人换届通知",
        date: "2026-02-01",
        link: withBase("/news/leadership-change-2026")
      }
    ];
    const slides = [
      { bg: "linear-gradient(135deg, #1a2744 0%, #2a3d66 100%)", title: "2026 春季团建", subtitle: "同行·共进 — 42人共赴城郊拓展之旅" },
      { bg: "linear-gradient(135deg, #0f1a2e 0%, #1a3a5c 100%)", title: "五周年庆典", subtitle: "回望来路，展望未来" },
      { bg: "linear-gradient(135deg, #1a2744 0%, #3a4d76 100%)", title: "战略升级 2025", subtitle: "聚焦成员培养与社会公益" },
      { bg: "linear-gradient(135deg, #0f1a2e 0%, #2a4a6e 100%)", title: "青年之声论坛", subtitle: "与三所高校共话成长" },
      { bg: "linear-gradient(135deg, #1a2744 0%, #1a3050 100%)", title: "数字化转型", subtitle: "知识管理与协作工具全面升级" }
    ];
    const currentSlide = ref(0);
    let timer = null;
    function nextSlide() {
      currentSlide.value = (currentSlide.value + 1) % slides.length;
    }
    onMounted(() => {
      timer = setInterval(nextSlide, 5e3);
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bu-home" }, _attrs))} data-v-7be0770c><section class="hero-section" data-v-7be0770c><div class="hero-bg" data-v-7be0770c></div><div class="hero-content" data-v-7be0770c><h1 class="hero-title" data-v-7be0770c>Brother Union</h1><p class="hero-slogan" data-v-7be0770c>凝聚力量，共拓边界</p><div class="hero-actions" data-v-7be0770c><a${ssrRenderAttr("href", unref(withBase)("/history/"))} class="hero-btn primary" data-v-7be0770c>了解更多</a><a${ssrRenderAttr("href", unref(withBase)("/members/"))} class="hero-btn secondary" data-v-7be0770c>认识我们</a></div></div></section><section class="carousel-section" data-v-7be0770c><div class="carousel" data-v-7be0770c><!--[-->`);
      ssrRenderList(slides, (slide, i) => {
        _push(`<div class="${ssrRenderClass([{ active: currentSlide.value === i }, "carousel-slide"])}" style="${ssrRenderStyle({ background: slide.bg })}" data-v-7be0770c><div class="carousel-content" data-v-7be0770c><h3 class="carousel-title" data-v-7be0770c>${ssrInterpolate(slide.title)}</h3><p class="carousel-subtitle" data-v-7be0770c>${ssrInterpolate(slide.subtitle)}</p></div></div>`);
      });
      _push(`<!--]--><div class="carousel-dots" data-v-7be0770c><!--[-->`);
      ssrRenderList(slides, (_, i) => {
        _push(`<span class="${ssrRenderClass([{ active: currentSlide.value === i }, "carousel-dot"])}" data-v-7be0770c></span>`);
      });
      _push(`<!--]--></div></div></section><section class="vision-section" data-v-7be0770c><div class="section-inner" data-v-7be0770c><h2 class="section-title" data-v-7be0770c>组织愿景</h2><div class="vision-content" data-v-7be0770c><p data-v-7be0770c> Brother Union（BU）是一个非商业性质的团体，致力于在共同的价值观和信念基础上， 凝聚一群志同道合的伙伴，共同探索个人成长与团队协作的无限可能。 </p><p data-v-7be0770c> 我们相信，真正的力量来自团结与信任。BU 通过建立开放、包容的交流平台， 鼓励每位成员发挥所长，在互助中实现自我价值，同时为集体的共同目标贡献力量。 </p><p data-v-7be0770c> 无论时代如何变迁，BU 始终坚守初心：以兄弟般的情谊为纽带， 以专业与热忱为驱动，在各自的领域中发光发热，共同书写属于我们的篇章。 </p></div></div></section><section class="latest-section" data-v-7be0770c><div class="section-inner" data-v-7be0770c><div class="section-header" data-v-7be0770c><h2 class="section-title" data-v-7be0770c>最新动态</h2><a${ssrRenderAttr("href", unref(withBase)("/news/"))} class="view-all" data-v-7be0770c>查看全部 →</a></div><div class="news-preview-grid" data-v-7be0770c><!--[-->`);
      ssrRenderList(latestNews, (item) => {
        _push(`<a${ssrRenderAttr("href", item.link)} class="news-preview-card" data-v-7be0770c><div class="news-preview-icon" data-v-7be0770c>${ssrInterpolate(item.icon)}</div><span class="news-preview-tag" data-v-7be0770c>${ssrInterpolate(item.tag)}</span><h3 class="news-preview-title" data-v-7be0770c>${ssrInterpolate(item.title)}</h3><p class="news-preview-date" data-v-7be0770c>${ssrInterpolate(item.date)}</p></a>`);
      });
      _push(`<!--]--></div></div></section><section class="links-section" data-v-7be0770c><div class="section-inner" data-v-7be0770c><h2 class="section-title" data-v-7be0770c>快速指引</h2><div class="quick-links" data-v-7be0770c><a${ssrRenderAttr("href", unref(withBase)("/history/"))} class="quick-link" data-v-7be0770c><span class="quick-link-icon" data-v-7be0770c>⏳</span><span data-v-7be0770c>历史沿革</span></a><a${ssrRenderAttr("href", unref(withBase)("/structure/"))} class="quick-link" data-v-7be0770c><span class="quick-link-icon" data-v-7be0770c>🏛</span><span data-v-7be0770c>组织架构</span></a><a${ssrRenderAttr("href", unref(withBase)("/members/"))} class="quick-link" data-v-7be0770c><span class="quick-link-icon" data-v-7be0770c>👥</span><span data-v-7be0770c>人物介绍</span></a><a${ssrRenderAttr("href", unref(withBase)("/resources/"))} class="quick-link" data-v-7be0770c><span class="quick-link-icon" data-v-7be0770c>📚</span><span data-v-7be0770c>资料库</span></a><a${ssrRenderAttr("href", unref(withBase)("/articles/"))} class="quick-link" data-v-7be0770c><span class="quick-link-icon" data-v-7be0770c>✍️</span><span data-v-7be0770c>成员文章</span></a></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7be0770c"]]);
export {
  Home as H
};
