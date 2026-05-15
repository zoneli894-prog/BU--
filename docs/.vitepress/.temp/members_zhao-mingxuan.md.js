import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"赵明轩","role":"宣传部部长","quote":"好的故事会自己传播"},"headers":[],"relativePath":"members/zhao-mingxuan.md","filePath":"members/zhao-mingxuan.md","lastUpdated":null}');
const __default__ = { name: "members/zhao-mingxuan.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "赵明轩",
        role: "宣传部部长",
        quote: "好的故事会自己传播"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>赵明轩负责 BU 的品牌形象建设和内容传播，在社交媒体运营和活动宣传方面有着独到的见解。他善于发现和讲述 BU 内部的好故事，让更多人了解和认同 BU 的价值。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><ul><li>建立了 BU 统一的视觉识别体系</li><li>管理官方社交媒体账号，粉丝互动率持续增长</li><li>策划了多篇高质量的活动报道和成员专访</li><li>培养了一批具备内容创作能力的宣传骨干</li></ul><h2 id="传播理念" tabindex="-1">传播理念 <a class="header-anchor" href="#传播理念" aria-label="Permalink to &quot;传播理念&quot;">​</a></h2><blockquote><p>最好的宣传不是自卖自夸，而是让参与者自发地成为传播者。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/zhao-mingxuan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
