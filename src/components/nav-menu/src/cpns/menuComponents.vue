<template>
  <template v-for="item in menus" :key="item.id">
    <el-sub-menu :index="item.id" v-if="item.children" @click="show">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <template v-if="item.children">
        <menuCompoents :menus="item.children"
      /></template>
    </el-sub-menu>
    <el-menu-item :index="`${item.id}`" v-else>{{ item.name }}</el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menuCompoents',
  props: ['menus'],
  setup() {
    const show = () => {
      console.log('ldawjjd')
    }
    return { show }
  }
})
</script>

<style scoped></style>
