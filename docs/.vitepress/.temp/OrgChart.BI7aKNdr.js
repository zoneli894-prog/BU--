import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = {
  __name: "OrgChart",
  __ssrInlineRender: true,
  setup(__props) {
    const departments = [
      { name: "宣传部", desc: "品牌建设、内容创作与传播" },
      { name: "外联部", desc: "对外合作、关系维护与拓展" },
      { name: "活动部", desc: "活动策划、组织执行与复盘" },
      { name: "技术部", desc: "技术支撑、系统运维与开发" },
      { name: "财务部", desc: "经费管理、预算编制与审计" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "org-tree" }, _attrs))}><div class="org-col"><div class="org-node root"><p class="org-node-title">主席团</p><p class="org-node-desc">最高决策与监督机构</p></div><div class="org-connector"></div></div><div class="org-col"><div class="org-node"><p class="org-node-title">秘书处</p><p class="org-node-desc">日常运营与协调中枢</p></div><div class="org-connector"></div></div><div class="org-branch"><!--[-->`);
      ssrRenderList(departments, (dept) => {
        _push(`<div class="org-col"><div class="org-connector"></div><div class="org-node org-dept-node"><p class="org-node-title">${ssrInterpolate(dept.name)}</p><p class="org-node-desc">${ssrInterpolate(dept.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="org-col" style="${ssrRenderStyle({ "margin-top": "2rem" })}"><div class="org-node" style="${ssrRenderStyle({ "border-style": "dashed" })}"><p class="org-node-title">顾问委员会</p><p class="org-node-desc">由创始人及名誉成员组成，提供战略咨询</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/OrgChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
