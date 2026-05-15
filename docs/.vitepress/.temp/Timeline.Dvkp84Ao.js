import { ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Timeline",
  __ssrInlineRender: true,
  setup(__props) {
    const events = [
      {
        year: "2018",
        title: "BU 筹备启动",
        desc: "五位创始成员在一次非正式聚会中萌生了建立一个长期协作团体的想法，Brother Union 的概念由此诞生。"
      },
      {
        year: "2019",
        title: "正式成立",
        desc: 'BU 完成组织章程的制定，确立了"团结、专业、共进"的核心价值观，并吸纳首批 15 名成员。'
      },
      {
        year: "2020",
        title: "首个重大项目落地",
        desc: "成功策划并执行了第一场跨部门协作的大型活动，标志着 BU 运作能力的实质性飞跃。"
      },
      {
        year: "2021",
        title: "组织架构完善",
        desc: "设立秘书处、宣传部、外联部等职能部门，建立了较为完善的内部治理结构。"
      },
      {
        year: "2022",
        title: "成员突破 50 人",
        desc: "通过推荐制稳步扩展，成员总数突破 50 人，涵盖多个领域和专业方向。"
      },
      {
        year: "2023",
        title: "数字化转型",
        desc: "启动内部知识管理系统建设，推动文件归档、流程标准化和线上协作工具的全面部署。"
      },
      {
        year: "2024",
        title: "五周年庆典",
        desc: "举办成立五周年系列纪念活动，回顾发展历程，表彰杰出贡献者，并发布新版组织章程。"
      },
      {
        year: "2025",
        title: "战略升级",
        desc: "核心层完成战略规划，明确未来三年发展方向，在成员培养和社会公益方面设立新目标。"
      },
      {
        year: "2026",
        title: "官方网站上线",
        desc: "BU 官方网站正式上线，实现了信息透明化和对外展示的新里程碑。"
      }
    ];
    const visibleItems = ref(/* @__PURE__ */ new Set());
    ref([]);
    let observer = null;
    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.dataset.index);
              visibleItems.value = /* @__PURE__ */ new Set([...visibleItems.value, idx]);
            }
          });
        },
        { threshold: 0.2 }
      );
      document.querySelectorAll(".timeline-item").forEach((el, i) => {
        el.dataset.index = i;
        observer.observe(el);
      });
    });
    onUnmounted(() => {
      observer == null ? void 0 : observer.disconnect();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bu-timeline" }, _attrs))}><!--[-->`);
      ssrRenderList(events, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ visible: visibleItems.value.has(index) }, "timeline-item"])}"><div class="timeline-card"><span class="timeline-year">${ssrInterpolate(item.year)}</span><h3 class="timeline-title">${ssrInterpolate(item.title)}</h3><p class="timeline-desc">${ssrInterpolate(item.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/Timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
