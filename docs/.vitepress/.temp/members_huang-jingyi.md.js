import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"黄静怡","role":"财务部部长","quote":"每一分钱都花在刀刃上"},"headers":[],"relativePath":"members/huang-jingyi.md","filePath":"members/huang-jingyi.md","lastUpdated":null}');
const __default__ = { name: "members/huang-jingyi.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "黄静怡",
        role: "财务部部长",
        quote: "每一分钱都花在刀刃上"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>黄静怡负责 BU 的经费管理和预算编制，确保每一笔支出都清晰透明、合理高效。她以严谨细致的工作风格，为 BU 的财务健康保驾护航。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>建立了规范的财务管理制度和报销流程</li><li>实现了财务信息的定期公示，提升透明度</li><li>优化了预算编制方法，提高了经费使用效率</li><li>建立了经费使用效益评估机制</li></ul><h2 id="理财理念" tabindex="-1">理财理念 <a class="header-anchor" href="#理财理念" aria-label="Permalink to &quot;理财理念&quot;">​</a></h2><blockquote><p>财务管理的核心不是省钱，而是让每一分钱都发挥最大价值。透明和规范是最好的信任基石。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/huang-jingyi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
