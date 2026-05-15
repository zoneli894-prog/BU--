<template>
  <div>
    <div v-for="group in groups" :key="group.title">
      <h3 class="member-group-title">{{ group.title }}</h3>
      <div class="member-grid">
        <div
          v-for="member in group.members"
          :key="member.name"
          class="member-card"
          @click="openModal(member)"
        >
          <div class="member-avatar">{{ member.name[0] }}</div>
          <p class="member-name">{{ member.name }}</p>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-quote">"{{ member.quote }}"</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" :class="{ active: showModal }" @click.self="closeModal">
      <div class="modal-content" v-if="selected">
        <button class="modal-close" @click="closeModal">&times;</button>
        <div style="text-align: center; margin-bottom: 1.5rem">
          <div class="member-avatar" style="margin: 0 auto 1rem">{{ selected.name[0] }}</div>
          <h3 style="margin: 0 0 0.25rem; color: var(--bu-navy)">{{ selected.name }}</h3>
          <p style="margin: 0; color: var(--bu-gold-dark); font-weight: 600">{{ selected.role }}</p>
        </div>
        <p style="line-height: 1.8; color: var(--bu-text)">{{ selected.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const selected = ref(null)

function openModal(member) {
  selected.value = member
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

const groups = [
  {
    title: '创始人 / 名誉成员',
    members: [
      {
        name: '张铭远',
        role: '创始人 · 名誉主席',
        quote: '志合者，不以山海为远',
        bio: 'BU 的创始核心，以其远见卓识和卓越的组织能力，带领团队从五人的小团体发展为如今拥有数十名成员的成熟组织。现担任名誉主席，为组织战略方向提供指导。',
      },
      {
        name: '李思源',
        role: '联合创始人 · 顾问',
        quote: '授人以鱼不如授人以渔',
        bio: '联合创始人之一，在 BU 成立初期负责制度建设和人才培养体系搭建，为组织的规范化运作奠定了坚实基础。',
      },
    ],
  },
  {
    title: '现任核心层',
    members: [
      {
        name: '王承志',
        role: '主席',
        quote: '以身作则，知行合一',
        bio: '现任主席，负责 BU 整体战略规划与执行。在他的领导下，BU 完成了多项标志性项目，成员满意度持续提升。',
      },
      {
        name: '陈嘉慧',
        role: '副主席',
        quote: '细节决定成败',
        bio: '负责内部协调与质量把控，在活动策划和执行方面拥有丰富的经验，确保每一个项目都能高质量交付。',
      },
      {
        name: '刘宇航',
        role: '秘书长',
        quote: '效率源于秩序',
        bio: '统筹秘书处日常工作，推动内部流程优化和数字化转型，是 BU 高效运作的重要保障。',
      },
    ],
  },
  {
    title: '各部门骨干',
    members: [
      {
        name: '赵明轩',
        role: '宣传部部长',
        quote: '好的故事会自己传播',
        bio: '负责 BU 品牌形象建设和内容传播，在社交媒体运营和活动宣传方面有着独到的见解。',
      },
      {
        name: '孙雨桐',
        role: '外联部部长',
        quote: '每一次握手都是一扇新的窗',
        bio: '拓展对外合作关系的主力，已与多个组织建立了长期友好的交流关系。',
      },
      {
        name: '周天翔',
        role: '活动部部长',
        quote: '让每个人都有参与感',
        bio: '活动策划与执行专家，擅长将创意转化为可落地的方案，注重参与体验的每一个环节。',
      },
      {
        name: '吴晓峰',
        role: '技术部部长',
        quote: '技术为人服务',
        bio: '负责 BU 的技术基础设施建设，包括官网、内部系统和协作工具的搭建与维护。',
      },
      {
        name: '黄静怡',
        role: '财务部部长',
        quote: '每一分钱都花在刀刃上',
        bio: '负责经费管理和预算编制，确保 BU 的每一笔支出都清晰透明、合理高效。',
      },
    ],
  },
]
</script>
