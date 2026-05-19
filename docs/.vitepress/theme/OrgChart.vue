<template>
  <div class="org-tree">
    <!-- Top Level -->
    <div class="org-col">
      <div class="org-node root">
        <p class="org-node-title">{{ topLevel.title }}</p>
        <p class="org-node-desc">{{ topLevel.desc }}</p>
      </div>
      <div class="org-connector"></div>
    </div>

    <!-- Second Level: Secretary -->
    <div class="org-col">
      <div class="org-node">
        <p class="org-node-title">{{ secondLevel.title }}</p>
        <p class="org-node-desc">{{ secondLevel.desc }}</p>
      </div>
      <div class="org-connector"></div>
    </div>

    <!-- Third Level: Departments -->
    <div class="org-branch">
      <div class="org-col" v-for="dept in departments" :key="dept.name">
        <div class="org-connector"></div>
        <div class="org-node org-dept-node">
          <p class="org-node-title">{{ dept.name }}</p>
          <p class="org-node-desc">{{ dept.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Advisory -->
    <div class="org-col" style="margin-top: 2rem">
      <div class="org-node" style="border-style: dashed">
        <p class="org-node-title">{{ advisory.title }}</p>
        <p class="org-node-desc">{{ advisory.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import orgData from '../../data/orgchart.json'

const topLevel = orgData.topLevel
const secondLevel = orgData.secondLevel
const departments = orgData.departments
const advisory = orgData.advisory
</script>
