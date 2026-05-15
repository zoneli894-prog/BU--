import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { w as withBase } from "./Content.mbudDdU6.js";
const _sfc_main = {
  __name: "MemberGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const groups = [
      {
        title: "创始人 / 名誉成员",
        members: [
          { name: "张铭远", role: "创始人 · 名誉主席", quote: "志合者，不以山海为远", link: "/members/zhang-mingyuan" },
          { name: "李思源", role: "联合创始人 · 顾问", quote: "授人以鱼不如授人以渔", link: "/members/li-siyuan" }
        ]
      },
      {
        title: "现任核心层",
        members: [
          { name: "王承志", role: "主席", quote: "以身作则，知行合一", link: "/members/wang-chengzhi" },
          { name: "陈嘉慧", role: "副主席", quote: "细节决定成败", link: "/members/chen-jiahui" },
          { name: "刘宇航", role: "秘书长", quote: "效率源于秩序", link: "/members/liu-yuhang" }
        ]
      },
      {
        title: "各部门骨干",
        members: [
          { name: "赵明轩", role: "宣传部部长", quote: "好的故事会自己传播", link: "/members/zhao-mingxuan" },
          { name: "孙雨桐", role: "外联部部长", quote: "每一次握手都是一扇新的窗", link: "/members/sun-yutong" },
          { name: "周天翔", role: "活动部部长", quote: "让每个人都有参与感", link: "/members/zhou-tianxiang" },
          { name: "吴晓峰", role: "技术部部长", quote: "技术为人服务", link: "/members/wu-xiaofeng" },
          { name: "黄静怡", role: "财务部部长", quote: "每一分钱都花在刀刃上", link: "/members/huang-jingyi" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(groups, (group) => {
        _push(`<div><h3 class="member-group-title">${ssrInterpolate(group.title)}</h3><div class="member-grid"><!--[-->`);
        ssrRenderList(group.members, (member) => {
          _push(`<a${ssrRenderAttr("href", unref(withBase)(member.link))} class="member-card"><div class="member-avatar">${ssrInterpolate(member.name[0])}</div><p class="member-name">${ssrInterpolate(member.name)}</p><p class="member-role">${ssrInterpolate(member.role)}</p><p class="member-quote">&quot;${ssrInterpolate(member.quote)}&quot;</p></a>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/MemberGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
