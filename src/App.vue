<template>
  <div>
    <MyTest></MyTest>
    <p>{{ $store.state.vname }}</p>
    <el-button type="primary">123123</el-button>
    <button @click="test">测试发送请求</button>
    <button @click="test2">测试发送请求2</button>
    <router-link to="/login">登陆</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import yhRequest from '@/service/index'
import MyTest from '@/components/test.vue'
export default defineComponent({
  name: 'App',
  components: { MyTest },
  setup() {
    const test = async () => {
      const result = await yhRequest.request({
        method: 'GET',
        url: '/users/bok',
        showLoading: false
      })
      console.log(result)
    }
    const test2 = async () => {
      yhRequest.request({
        method: 'GET',
        url: '/users/bok'
      })
    }
    return {
      test,
      test2
    }
  }
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
