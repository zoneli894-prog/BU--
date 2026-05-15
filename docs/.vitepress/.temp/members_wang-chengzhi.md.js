import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"王承志","role":"主席","quote":"以身作则，知行合一"},"headers":[],"relativePath":"members/wang-chengzhi.md","filePath":"members/wang-chengzhi.md","lastUpdated":null}');
const __default__ = { name: "members/wang-chengzhi.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "王承志",
        role: "主席",
        quote: "以身作则，知行合一"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>王承志是 Brother Union 现任主席，负责 BU 整体战略规划与执行。他以务实的工作作风和出色的领导力，带领 BU 在近年实现了多项突破性发展。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><p>在他的领导下，BU 完成了多项标志性项目：</p><ul><li><strong>战略升级</strong>：主导完成了 2025-2028 三年战略规划，明确了组织发展方向</li><li><strong>数字化转型</strong>：推动内部协作平台和知识管理系统的全面部署</li><li><strong>社会公益</strong>：发起了&quot;青年之声&quot;公益论坛，拓展了 BU 的社会影响力</li><li><strong>成员增长</strong>：成员总数从 40 人稳步增长至 58 人，满意度持续提升</li></ul><h2 id="领导理念" tabindex="-1">领导理念 <a class="header-anchor" href="#领导理念" aria-label="Permalink to &quot;领导理念&quot;">​</a></h2><p>王承志信奉&quot;以身作则&quot;的领导哲学，他认为组织的领导者首先要成为规则的遵守者和价值的践行者。在日常工作中，他总是率先垂范，用实际行动感染和带动团队。</p><h2 id="未来展望" tabindex="-1">未来展望 <a class="header-anchor" href="#未来展望" aria-label="Permalink to &quot;未来展望&quot;">​</a></h2><blockquote><p>BU 的下一个三年，我们将聚焦成员培养和社会公益。我希望每一位成员都能在 BU 找到归属感和成长空间。BU 不只是一个组织，更是一个让彼此变得更好的平台。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/wang-chengzhi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
