import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MemberDetail } from "./MemberDetail.DDNkq8Vp.js";
import { useSSRContext } from "vue";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"name":"张铭远","role":"创始人 · 名誉主席","quote":"志合者，不以山海为远"},"headers":[],"relativePath":"members/zhang-mingyuan.md","filePath":"members/zhang-mingyuan.md","lastUpdated":null}');
const __default__ = { name: "members/zhang-mingyuan.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(MemberDetail, {
        name: "张铭远",
        role: "创始人 · 名誉主席",
        quote: "志合者，不以山海为远"
      }, null, _parent));
      _push(`<h2 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h2><p>张铭远是 Brother Union 的创始核心与精神领袖。2018 年，他与四位志同道合的朋友在一次非正式聚会中萌生了建立长期协作团体的想法，BU 的概念由此诞生。</p><h2 id="主要贡献" tabindex="-1">主要贡献 <a class="header-anchor" href="#主要贡献" aria-label="Permalink to &quot;主要贡献&quot;">​</a></h2><p>作为 BU 的掌舵人，张铭远带领团队从五人的小团体发展为如今拥有数十名成员的成熟组织。他以远见卓识和卓越的组织能力，确立了&quot;团结、专业、共进&quot;的核心价值观，为 BU 奠定了坚实的文化根基。</p><p>在担任主席期间，他主导完成了：</p><ul><li>组织章程的制定与完善</li><li>核心价值观体系的确立</li><li>首批成员招募标准的建立</li><li>首个跨部门协作项目的成功落地</li></ul><h2 id="现任角色" tabindex="-1">现任角色 <a class="header-anchor" href="#现任角色" aria-label="Permalink to &quot;现任角色&quot;">​</a></h2><p>现担任名誉主席，不再参与日常运营，但为核心层提供战略方向指导和重大决策建议。他的经验与智慧是 BU 最宝贵的精神财富之一。</p><h2 id="个人格言" tabindex="-1">个人格言 <a class="header-anchor" href="#个人格言" aria-label="Permalink to &quot;个人格言&quot;">​</a></h2><blockquote><p>志合者，不以山海为远。BU 的力量不在于人多，而在于心齐。</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("members/zhang-mingyuan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
