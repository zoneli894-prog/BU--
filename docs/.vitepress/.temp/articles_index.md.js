import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { A as ArticleList } from "./ArticleList.BFPgir2H.js";
import { useSSRContext } from "vue";
import "./Content.mbudDdU6.js";
import "@vueuse/core";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"成员文章","description":"","frontmatter":{},"headers":[],"relativePath":"articles/index.md","filePath":"articles/index.md","lastUpdated":null}');
const __default__ = { name: "articles/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="成员文章" tabindex="-1">成员文章 <a class="header-anchor" href="#成员文章" aria-label="Permalink to &quot;成员文章&quot;">​</a></h1><blockquote><p>思想的碰撞，是团队最好的催化剂。</p></blockquote><p>这里是 BU 成员分享学术思考、成长感悟和活动复盘的空间。每一篇文章都承载着作者的真实经历与独特视角。</p>`);
      _push(ssrRenderComponent(ArticleList, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("articles/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
