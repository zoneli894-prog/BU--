import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"李思源","role":"联合创始人 · 顾问","quote":"授人以鱼不如授人以渔"},"headers":[],"relativePath":"members/li-siyuan.md","filePath":"members/li-siyuan.md","lastUpdated":null}');
const __default__ = { name: "members/li-siyuan.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "李思源",
        role: "联合创始人 · 顾问",
        quote: "授人以鱼不如授人以渔"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>李思源是 Brother Union 的联合创始人之一，在 BU 成立初期发挥了至关重要的作用。他以严谨的思维方式和丰富的制度建设经验，为组织的规范化运作奠定了坚实基础。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><p>在 BU 的初创阶段，李思源承担了大量基础性工作：</p><ul><li><strong>制度建设</strong>：主导起草了 BU 的首版组织章程，明确了组织架构和运作流程</li><li><strong>人才培养</strong>：设计了&quot;导师制&quot;的雏形，建立了成员成长路径</li><li><strong>质量把控</strong>：制定了活动策划与执行的标准流程，确保项目交付质量</li><li><strong>文化建设</strong>：推动了 BU 内部知识分享机制的建立</li></ul><h2 id="教育理念" tabindex="-1">教育理念 <a class="header-anchor" href="#教育理念" aria-label="Permalink to &quot;教育理念&quot;">​</a></h2><p>李思源坚信&quot;授人以鱼不如授人以渔&quot;的理念，在 BU 内部积极倡导学习型组织文化。他发起的读书分享会和技能工作坊已成为 BU 最受欢迎的常规活动之一。</p><h2 id="现任角色" tabindex="-1">现任角色 <a class="header-anchor" href="#现任角色" aria-label="Permalink to &quot;现任角色&quot;">​</a></h2><p>现作为顾问委员会成员，为组织的人才培养和制度优化方向提供专业建议。</p><blockquote><p>真正的传承不是传递知识，而是点燃热情。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/li-siyuan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
