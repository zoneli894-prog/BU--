import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Timeline.Dvkp84Ao.js";
import { useSSRContext } from "vue";
const __pageData = JSON.parse('{"title":"历史沿革","description":"","frontmatter":{},"headers":[],"relativePath":"history/index.md","filePath":"history/index.md","lastUpdated":null}');
const __default__ = { name: "history/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="历史沿革" tabindex="-1">历史沿革 <a class="header-anchor" href="#历史沿革" aria-label="Permalink to &quot;历史沿革&quot;">​</a></h1><blockquote><p>从一个想法到一个团队，从一个团队到一种信念。</p></blockquote>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("history/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
