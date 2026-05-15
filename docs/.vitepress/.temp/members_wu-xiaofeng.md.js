import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"吴晓峰","role":"技术部部长","quote":"技术为人服务"},"headers":[],"relativePath":"members/wu-xiaofeng.md","filePath":"members/wu-xiaofeng.md","lastUpdated":null}');
const __default__ = { name: "members/wu-xiaofeng.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "吴晓峰",
        role: "技术部部长",
        quote: "技术为人服务"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>吴晓峰负责 BU 的技术基础设施建设，包括官网、内部系统和协作工具的搭建与维护。他以务实的技术视野，确保 BU 的技术方案始终贴合实际需求。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>搭建了 BU 官方网站（基于 VitePress）</li><li>部署了内部协作平台和文档管理系统</li><li>建立了技术文档规范和开发流程</li><li>为各部门提供技术支持和培训</li></ul><h2 id="技术理念" tabindex="-1">技术理念 <a class="header-anchor" href="#技术理念" aria-label="Permalink to &quot;技术理念&quot;">​</a></h2><blockquote><p>技术的价值不在于多先进，而在于多好用。我始终相信，最好的技术是让人感觉不到技术存在的技术。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/wu-xiaofeng.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
