import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MemberGrid.BO_zZc6A.js";
import { useSSRContext } from "vue";
import "./Content.mbudDdU6.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"人物介绍","description":"","frontmatter":{},"headers":[],"relativePath":"members/index.md","filePath":"members/index.md","lastUpdated":null}');
const __default__ = { name: "members/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="人物介绍" tabindex="-1">人物介绍 <a class="header-anchor" href="#人物介绍" aria-label="Permalink to &quot;人物介绍&quot;">​</a></h1><blockquote><p>每一位成员都是 BU 不可或缺的力量。</p></blockquote>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
