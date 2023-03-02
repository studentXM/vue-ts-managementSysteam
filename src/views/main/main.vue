<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto"><NavMenu></NavMenu></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavMenu from '@/components/nav-menu'
export default defineComponent({
  components: { NavMenu },
  setup() {
    return {}
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
}
</style>
