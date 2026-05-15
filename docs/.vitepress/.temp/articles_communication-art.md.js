import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"团队协作中的沟通艺术","description":"","frontmatter":{"title":"团队协作中的沟通艺术","author":"陈嘉慧","date":"2026-02-28T00:00:00.000Z","category":"学术思考"},"headers":[],"relativePath":"articles/communication-art.md","filePath":"articles/communication-art.md","lastUpdated":null}');
const _sfc_main = { name: "articles/communication-art.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="团队协作中的沟通艺术" tabindex="-1">团队协作中的沟通艺术 <a class="header-anchor" href="#团队协作中的沟通艺术" aria-label="Permalink to &quot;团队协作中的沟通艺术&quot;">​</a></h1><h2 id="为什么沟通如此重要" tabindex="-1">为什么沟通如此重要？ <a class="header-anchor" href="#为什么沟通如此重要" aria-label="Permalink to &quot;为什么沟通如此重要？&quot;">​</a></h2><p>在 BU 的日常运作中，我发现 80% 的问题不是出在能力上，而是出在沟通上。信息不对称、理解偏差、反馈缺失——这些看似微小的沟通漏洞，往往会造成严重的协作障碍。</p><h2 id="四个沟通原则" tabindex="-1">四个沟通原则 <a class="header-anchor" href="#四个沟通原则" aria-label="Permalink to &quot;四个沟通原则&quot;">​</a></h2><h3 id="原则一-先听后说" tabindex="-1">原则一：先听后说 <a class="header-anchor" href="#原则一-先听后说" aria-label="Permalink to &quot;原则一：先听后说&quot;">​</a></h3><p>很多人在沟通中急于表达自己的观点，却忽略了倾听的重要性。真正的倾听不是等待对方说完，而是理解对方真正想表达什么。</p><h3 id="原则二-对事不对人" tabindex="-1">原则二：对事不对人 <a class="header-anchor" href="#原则二-对事不对人" aria-label="Permalink to &quot;原则二：对事不对人&quot;">​</a></h3><p>批评要针对行为而非人格。&quot;你这次活动的时间安排有问题&quot;和&quot;你怎么这么不靠谱&quot;，效果天差地别。</p><h3 id="原则三-及时反馈" tabindex="-1">原则三：及时反馈 <a class="header-anchor" href="#原则三-及时反馈" aria-label="Permalink to &quot;原则三：及时反馈&quot;">​</a></h3><p>不要让问题过夜。发现问题第一时间沟通，比事后复盘时才说&quot;当时我就觉得不对&quot;有效一万倍。</p><h3 id="原则四-书面确认" tabindex="-1">原则四：书面确认 <a class="header-anchor" href="#原则四-书面确认" aria-label="Permalink to &quot;原则四：书面确认&quot;">​</a></h3><p>重要决策一定要有书面记录。口头约定在执行中很容易变形，白纸黑字才是最好的保障。</p><h2 id="bu-的实践" tabindex="-1">BU 的实践 <a class="header-anchor" href="#bu-的实践" aria-label="Permalink to &quot;BU 的实践&quot;">​</a></h2><p>在 BU，我们建立了几个有助于高效沟通的机制：</p><ul><li><strong>周会制度</strong>：每周固定时间同步进展和问题</li><li><strong>文档规范</strong>：所有重要决策都有文档记录</li><li><strong>复盘文化</strong>：每次活动后进行结构化复盘</li></ul><blockquote><p>沟通的本质不是说话，而是让对方真正理解你的意思。</p></blockquote><hr><p><em>陈嘉慧 · BU 副主席 · 2026年2月</em></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("articles/communication-art.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const communicationArt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  communicationArt as default
};
