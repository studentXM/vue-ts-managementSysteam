<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'"
        ><NavMenu :isCollapse="isCollapse"></NavMenu
      ></el-aside>
      <el-container>
        <el-header><NavHeader @showAside="foldChange"></NavHeader></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapse = ref(false)
    const foldChange = (fold: boolean) => {
      isCollapse.value = fold
    }
    return { foldChange, isCollapse }
  }
})
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-main {
    background: #f2f3f5;
  }
  .el-aside {
    transition: width 300ms;
    background: #113a62;
  }
}
</style>
