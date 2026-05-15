import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./OrgChart.BI7aKNdr.js";
import { useSSRContext } from "vue";
const __pageData = JSON.parse('{"title":"组织架构","description":"","frontmatter":{},"headers":[],"relativePath":"structure/index.md","filePath":"structure/index.md","lastUpdated":null}');
const __default__ = { name: "structure/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="组织架构" tabindex="-1">组织架构 <a class="header-anchor" href="#组织架构" aria-label="Permalink to &quot;组织架构&quot;">​</a></h1><blockquote><p>清晰的架构是高效协作的基石。</p></blockquote><p>BU 采用扁平化管理与职能部门制相结合的组织架构，确保决策效率与专业分工的平衡。</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<hr><h2 id="各部门职责说明" tabindex="-1">各部门职责说明 <a class="header-anchor" href="#各部门职责说明" aria-label="Permalink to &quot;各部门职责说明&quot;">​</a></h2><h3 id="主席团" tabindex="-1">主席团 <a class="header-anchor" href="#主席团" aria-label="Permalink to &quot;主席团&quot;">​</a></h3><p>最高决策与监督机构，负责制定组织战略方向、审批重大事项、监督各部门工作执行情况。主席团由主席、副主席及秘书长组成。</p><h3 id="秘书处" tabindex="-1">秘书处 <a class="header-anchor" href="#秘书处" aria-label="Permalink to &quot;秘书处&quot;">​</a></h3><p>日常运营与协调中枢，负责内部信息传递、会议组织、文件归档及跨部门协调工作。秘书处是主席团与各职能部门之间的桥梁。</p><h3 id="宣传部" tabindex="-1">宣传部 <a class="header-anchor" href="#宣传部" aria-label="Permalink to &quot;宣传部&quot;">​</a></h3><p>负责 BU 的品牌形象建设、内容创作与传播。管理官方社交媒体账号、撰写活动报道、设计宣传物料，确保 BU 的对外形象统一专业。</p><h3 id="外联部" tabindex="-1">外联部 <a class="header-anchor" href="#外联部" aria-label="Permalink to &quot;外联部&quot;">​</a></h3><p>拓展和维护对外合作关系，代表 BU 与其他组织进行交流互动，寻找合作机会，扩大 BU 的影响力与资源网络。</p><h3 id="活动部" tabindex="-1">活动部 <a class="header-anchor" href="#活动部" aria-label="Permalink to &quot;活动部&quot;">​</a></h3><p>策划、组织和执行各类内部活动与对外项目。从创意构思到落地执行，活动部全程参与，确保每场活动的品质和参与体验。</p><h3 id="技术部" tabindex="-1">技术部 <a class="header-anchor" href="#技术部" aria-label="Permalink to &quot;技术部&quot;">​</a></h3><p>负责 BU 的技术基础设施建设与维护，包括官方网站、内部管理系统、协作工具的搭建与技术支持。</p><h3 id="财务部" tabindex="-1">财务部 <a class="header-anchor" href="#财务部" aria-label="Permalink to &quot;财务部&quot;">​</a></h3><p>管理组织经费，编制年度预算，监督各项支出的合理性与透明度，定期向主席团和全体成员汇报财务状况。</p><h3 id="顾问委员会" tabindex="-1">顾问委员会 <a class="header-anchor" href="#顾问委员会" aria-label="Permalink to &quot;顾问委员会&quot;">​</a></h3><p>由创始人及名誉成员组成，不参与日常运营，但为核心层提供战略咨询和重大决策建议。</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("structure/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
