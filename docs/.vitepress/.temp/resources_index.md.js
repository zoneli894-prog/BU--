import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ResourceTable.BQ962biE.js";
import { useSSRContext } from "vue";
const __pageData = JSON.parse('{"title":"资料展示与下载","description":"","frontmatter":{},"headers":[],"relativePath":"resources/index.md","filePath":"resources/index.md","lastUpdated":null}');
const __default__ = { name: "resources/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="资料展示与下载" tabindex="-1">资料展示与下载 <a class="header-anchor" href="#资料展示与下载" aria-label="Permalink to &quot;资料展示与下载&quot;">​</a></h1><blockquote><p>知识的积累与共享，是组织持续成长的动力。</p></blockquote><p>此处汇集了 BU 的各类重要文件和资料，方便成员查阅和下载。</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<hr><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><ol><li>点击对应文件的「下载」按钮即可获取文件。</li><li>文件如有更新，将在本页面同步通知。</li><li>如需获取未列出的历史资料，请联系秘书处。</li><li>所有文件仅供 BU 内部成员使用，请勿外传。</li></ol></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
