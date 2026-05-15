import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main = {
  __name: "MemberDetail",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    quote: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "member-detail-header" }, _attrs))} data-v-f4d431cc><div class="member-detail-avatar" data-v-f4d431cc>${ssrInterpolate(__props.name[0])}</div><div class="member-detail-info" data-v-f4d431cc><h1 class="member-detail-name" data-v-f4d431cc>${ssrInterpolate(__props.name)}</h1><p class="member-detail-role" data-v-f4d431cc>${ssrInterpolate(__props.role)}</p><p class="member-detail-quote" data-v-f4d431cc>&quot;${ssrInterpolate(__props.quote)}&quot;</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/MemberDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MemberDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4d431cc"]]);
export {
  MemberDetail as M
};
