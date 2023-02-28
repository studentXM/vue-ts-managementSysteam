<template>
  <div id="app">
    <!-- <router-link to="/login">登陆</router-link>
    <router-link to="/main">主页</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
