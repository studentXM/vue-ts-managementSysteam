<template>
  <div class="login-panel">
    <h2>登录</h2>
    <div class="box">
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="accont">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <User />
              </el-icon>
              <span>登录</span>
            </span>
          </template>
          <!-- 账号登录 -->
          <loginAccont ref="accountRef"></loginAccont>
        </el-tab-pane>
        <!-- 手机登录 -->
        <el-tab-pane label="手机号登陆" name="phone"
          ><loginPhone ref="phoneRef"></loginPhone
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="password-group">
      <el-checkbox v-model="swicth" label="记住密码"></el-checkbox>
      <span>忘记密码</span>
    </div>
    <el-button class="submit" type="primary" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import loginAccont from './login-accont.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: { User, loginAccont, loginPhone },
  setup() {
    let swicth = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccont>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    let currentTab = ref('accont')
    const handleLogin = () => {
      if (currentTab.value === 'accont') {
        accountRef.value?.loginAccont()
      } else {
        phoneRef.value?.loginPhone()
      }
    }
    return { swicth, accountRef, handleLogin, currentTab, phoneRef }
  }
})
</script>
<style lange="less" scoped>
.login-panel {
}
h2 {
  text-align: center;
}
.box {
  width: 320px;
  background: white;
}
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
}
.password-group {
  display: flex;
  justify-content: space-between;
  color: #409eff;
  font-size: 15px;
  line-height: 32px;
  height: 32px;
  cursor: pointer;
}
.submit {
  width: 100%;
}
</style>
