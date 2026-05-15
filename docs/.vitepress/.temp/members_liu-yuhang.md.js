import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"刘宇航","role":"秘书长","quote":"效率源于秩序"},"headers":[],"relativePath":"members/liu-yuhang.md","filePath":"members/liu-yuhang.md","lastUpdated":null}');
const __default__ = { name: "members/liu-yuhang.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "刘宇航",
        role: "秘书长",
        quote: "效率源于秩序"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>刘宇航统筹秘书处日常工作，是 BU 高效运作的重要保障。他推动了内部流程优化和数字化转型，将秘书处打造成为各部门提供坚实支撑的中枢机构。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>部署了统一的线上协作平台，文档管理和任务分配效率提升 40%</li><li>建立了电子化的财务报销和审批流程</li><li>完善了会议制度和文件归档规范</li><li>推动了内部知识库的建设，实现了经验的系统化沉淀</li></ul><h2 id="管理理念" tabindex="-1">管理理念 <a class="header-anchor" href="#管理理念" aria-label="Permalink to &quot;管理理念&quot;">​</a></h2><blockquote><p>秩序不是束缚，而是释放创造力的前提。当日常运转有序，我们才能把更多精力投入到真正重要的事情上。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/liu-yuhang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
