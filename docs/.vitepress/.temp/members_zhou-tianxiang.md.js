import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"周天翔","role":"活动部部长","quote":"让每个人都有参与感"},"headers":[],"relativePath":"members/zhou-tianxiang.md","filePath":"members/zhou-tianxiang.md","lastUpdated":null}');
const __default__ = { name: "members/zhou-tianxiang.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "周天翔",
        role: "活动部部长",
        quote: "让每个人都有参与感"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>周天翔是活动策划与执行专家，擅长将创意转化为可落地的方案。他特别注重参与体验，坚信好的活动应该让每一位参与者都感到被关注和重视。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>策划并执行了 2026 年春季团建（42 人参与，满意度 98%）</li><li>建立了标准化的活动策划流程模板</li><li>推动了活动复盘机制，形成可复用的经验库</li><li>培养了多名独立策划能力的活动骨干</li></ul><h2 id="策划理念" tabindex="-1">策划理念 <a class="header-anchor" href="#策划理念" aria-label="Permalink to &quot;策划理念&quot;">​</a></h2><blockquote><p>活动的灵魂不在舞台，而在每一个参与者的脸上。如果有人感到被冷落，那这场活动就不算成功。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/zhou-tianxiang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
