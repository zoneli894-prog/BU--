import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"新闻动态","description":"","frontmatter":{},"headers":[],"relativePath":"news/index.md","filePath":"news/index.md","lastUpdated":null}');
const _sfc_main = { name: "news/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="新闻动态" tabindex="-1">新闻动态 <a class="header-anchor" href="#新闻动态" aria-label="Permalink to &quot;新闻动态&quot;">​</a></h1><p>了解 BU 的最新活动、公告与成员故事。</p><div class="news-list"><a href="/news/spring-team-building-2026" class="news-card"><div class="news-thumb"><span></span></div><div class="news-body"><span class="news-tag">活动总结</span><h3 class="news-title">2026年度春季团建活动圆满举办</h3><p class="news-meta">2026-04-20 · 阅读约 5 分钟</p><p class="news-summary">本次春季团建以&quot;同行·共进&quot;为主题，组织了为期两天的户外拓展活动，参与成员超过 40 人，充分展现了 BU 的团队凝聚力。</p></div></a><a href="/news/core-interview-2026" class="news-card"><div class="news-thumb"><span></span></div><div class="news-body"><span class="news-tag">成员专访</span><h3 class="news-title">对话核心层：BU 未来三年的发展方向</h3><p class="news-meta">2026-03-15 · 阅读约 8 分钟</p><p class="news-summary">主席王承志与副主席陈嘉慧接受了专访，就 BU 的战略规划、成员培养以及社会公益等方面进行了深入交流。</p></div></a><a href="/news/leadership-change-2026" class="news-card"><div class="news-thumb"><span></span></div><div class="news-body"><span class="news-tag">内部通告</span><h3 class="news-title">2026年各部门负责人换届通知</h3><p class="news-meta">2026-02-01 · 阅读约 3 分钟</p><p class="news-summary">经主席团审议批准，2026年度各部门负责人换届工作正式启动，欢迎符合条件的成员积极报名参选。</p></div></a><a href="/news/annual-review-2025" class="news-card"><div class="news-thumb"><span></span></div><div class="news-body"><span class="news-tag">活动总结</span><h3 class="news-title">2025 年度回顾：BU 的成长与突破</h3><p class="news-meta">2025-12-30 · 阅读约 6 分钟</p><p class="news-summary">回顾 BU 在 2025 年的重要里程碑：战略升级、数字化转型推进、成员规模稳步增长，以及多个标志性项目的成功落地。</p></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("news/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
