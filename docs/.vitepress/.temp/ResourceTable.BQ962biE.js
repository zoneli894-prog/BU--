import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { ref, computed, useSSRContext } from "vue";
const _sfc_main = {
  __name: "ResourceTable",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ["全部", "规章制度", "活动手册", "研究报告", "多媒体存档"];
    const activeCat = ref("全部");
    const files = [
      { name: "BU 组织章程（2024修订版）", category: "规章制度", format: "PDF", date: "2024-06-15" },
      { name: "成员行为准则", category: "规章制度", format: "PDF", date: "2023-03-01" },
      { name: "财务管理制度", category: "规章制度", format: "PDF", date: "2023-09-20" },
      { name: "2025年度活动手册", category: "活动手册", format: "PDF", date: "2025-01-10" },
      { name: "春季团建活动策划书", category: "活动手册", format: "PDF", date: "2026-03-01" },
      { name: "五周年庆典活动方案", category: "活动手册", format: "PDF", date: "2024-05-20" },
      { name: "BU 发展战略白皮书 2025-2028", category: "研究报告", format: "PDF", date: "2025-02-15" },
      { name: "成员满意度调研报告（2025）", category: "研究报告", format: "PDF", date: "2025-11-30" },
      { name: "组织治理模式研究", category: "研究报告", format: "PDF", date: "2024-08-10" },
      { name: "五周年纪念视频", category: "多媒体存档", format: "MP4", date: "2024-06-01" },
      { name: "年度回顾相册（2025）", category: "多媒体存档", format: "ZIP", date: "2025-12-25" }
    ];
    const filtered = computed(() => {
      if (activeCat.value === "全部") return files;
      return files.filter((f) => f.category === activeCat.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="category-filter"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ active: activeCat.value === cat }, "cat-btn"])}">${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div><table class="resource-table"><thead><tr><th>文件名</th><th>分类</th><th>格式</th><th>更新日期</th><th>操作</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filtered.value, (file) => {
        _push(`<tr><td>${ssrInterpolate(file.name)}</td><td><span class="resource-badge">${ssrInterpolate(file.category)}</span></td><td>${ssrInterpolate(file.format)}</td><td>${ssrInterpolate(file.date)}</td><td><a href="#" class="download-btn">下载</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/ResourceTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
