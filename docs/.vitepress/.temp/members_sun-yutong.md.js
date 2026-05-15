import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"孙雨桐","role":"外联部部长","quote":"每一次握手都是一扇新的窗"},"headers":[],"relativePath":"members/sun-yutong.md","filePath":"members/sun-yutong.md","lastUpdated":null}');
const __default__ = { name: "members/sun-yutong.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "孙雨桐",
        role: "外联部部长",
        quote: "每一次握手都是一扇新的窗"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>孙雨桐是拓展对外合作关系的主力，已与多个组织建立了长期友好的交流关系。她以真诚的态度和专业的沟通能力，为 BU 搭建了广泛的合作网络。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>与三所高校建立了长期合作，共同举办了&quot;青年之声&quot;公益论坛</li><li>拓展了与本地多个社团组织的合作关系</li><li>建立了对外合作评估与跟踪机制</li><li>推动了 BU 品牌在外部平台的曝光</li></ul><h2 id="合作理念" tabindex="-1">合作理念 <a class="header-anchor" href="#合作理念" aria-label="Permalink to &quot;合作理念&quot;">​</a></h2><blockquote><p>合作不是零和博弈，而是共同把蛋糕做大。每一次真诚的握手，都可能打开一扇意想不到的窗。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/sun-yutong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
