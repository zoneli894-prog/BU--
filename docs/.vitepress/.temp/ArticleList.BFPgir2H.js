import { ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { w as withBase } from "./Content.mbudDdU6.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "ArticleList",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ["全部", "学术思考", "成长感悟", "活动复盘"];
    const activeCat = ref("全部");
    const articles = [
      {
        title: "论非商业组织的可持续发展路径",
        author: "张铭远",
        date: "2026-04-10",
        category: "学术思考",
        summary: "从 BU 的实践出发，探讨非商业性质团体如何在不依赖经济激励的情况下保持组织活力和成员凝聚力。",
        link: "/articles/sustainable-development"
      },
      {
        title: "我在 BU 的三年：从参与者到组织者",
        author: "周天翔",
        date: "2026-03-20",
        category: "成长感悟",
        summary: "回顾自己在 BU 三年的成长历程，从最初的活动参与者到如今的活动部部长，分享组织能力提升的点滴心得。",
        link: "/articles/my-three-years"
      },
      {
        title: "团队协作中的沟通艺术",
        author: "陈嘉慧",
        date: "2026-02-28",
        category: "学术思考",
        summary: "结合 BU 内部协作经验，探讨高效团队沟通的原则、方法和常见误区。",
        link: "/articles/communication-art"
      },
      {
        title: "2025 春季团建复盘：我们做对了什么",
        author: "周天翔",
        date: "2025-05-15",
        category: "活动复盘",
        summary: "对 2025 年春季团建活动进行系统复盘，总结成功经验和改进空间。",
        link: "/articles/spring-review-2025"
      },
      {
        title: "如何在团队中建立真正的信任",
        author: "王承志",
        date: "2025-11-10",
        category: "成长感悟",
        summary: "信任不是口号，而是日复一日的行动积累。分享在 BU 管理实践中关于信任建立的思考。",
        link: "/articles/building-trust"
      }
    ];
    const filtered = computed(() => {
      if (activeCat.value === "全部") return articles;
      return articles.filter((a) => a.category === activeCat.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1660efd0><div class="category-filter" data-v-1660efd0><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ active: activeCat.value === cat }, "cat-btn"])}" data-v-1660efd0>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div><div class="article-list" data-v-1660efd0><!--[-->`);
      ssrRenderList(filtered.value, (article) => {
        _push(`<a${ssrRenderAttr("href", unref(withBase)(article.link))} class="article-card" data-v-1660efd0><div class="article-card-body" data-v-1660efd0><div class="article-meta" data-v-1660efd0><span class="article-tag" data-v-1660efd0>${ssrInterpolate(article.category)}</span><span class="article-date" data-v-1660efd0>${ssrInterpolate(article.date)}</span></div><h3 class="article-title" data-v-1660efd0>${ssrInterpolate(article.title)}</h3><p class="article-summary" data-v-1660efd0>${ssrInterpolate(article.summary)}</p><div class="article-footer" data-v-1660efd0><span class="article-author" data-v-1660efd0><span class="author-dot" data-v-1660efd0>${ssrInterpolate(article.author[0])}</span> ${ssrInterpolate(article.author)}</span></div></div></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/ArticleList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticleList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1660efd0"]]);
export {
  ArticleList as A
};
