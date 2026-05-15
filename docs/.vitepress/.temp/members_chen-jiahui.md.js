import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"陈嘉慧","role":"副主席","quote":"细节决定成败"},"headers":[],"relativePath":"members/chen-jiahui.md","filePath":"members/chen-jiahui.md","lastUpdated":null}');
const __default__ = { name: "members/chen-jiahui.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "陈嘉慧",
        role: "副主席",
        quote: "细节决定成败"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>陈嘉慧是 Brother Union 现任副主席，负责内部协调与质量把控。她在活动策划和执行方面拥有丰富经验，以对细节的极致追求而闻名。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>统筹协调各部门之间的沟通与协作，确保信息传递高效畅通</li><li>建立了项目质量评估体系，提升了活动交付的一致性</li><li>主导了春季团建、五周年庆典等大型活动的策划与执行</li><li>推动建立了活动复盘机制，将经验转化为可复用的知识</li></ul><h2 id="工作风格" tabindex="-1">工作风格 <a class="header-anchor" href="#工作风格" aria-label="Permalink to &quot;工作风格&quot;">​</a></h2><p>陈嘉慧以&quot;细节决定成败&quot;为工作信条，她常说：&quot;一个活动的成功不在于创意多宏大，而在于执行多到位。&quot;她对每一个环节都精益求精，从场地布置到时间安排，从物资准备到应急预案，都亲力亲为地把关。</p><blockquote><p>完美的执行是对好创意最好的尊重。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/chen-jiahui.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
