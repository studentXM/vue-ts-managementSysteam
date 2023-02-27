<template>
  <div>
    <MyTest></MyTest>
    <p>{{ $store.state.vname }}</p>
    <el-button type="primary">123123</el-button>
    <router-link to="/login">登陆</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MyTest from '@/components/test.vue'
export default defineComponent({
  name: 'App',
  components: { MyTest }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
