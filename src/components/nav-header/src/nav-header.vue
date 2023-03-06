<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <Fold v-show="isFold === false" /><Unfold v-show="isFold === true" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['showAside'],
  setup(_props, contxt) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      contxt.emit('showAside', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;
  .el-icon {
    font-size: 30px;
  }
}
</style>
