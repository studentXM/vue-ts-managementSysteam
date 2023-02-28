<template>
  <div class="login-panel">
    <h2>登录</h2>
    <div class="box">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <User />
              </el-icon>
              <span>登录</span>
            </span>
          </template>
          <loginAccont></loginAccont>
        </el-tab-pane>
        <el-tab-pane label="注册"><el-input></el-input></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@element-plus/icons-vue'
import loginAccont from './login-accont.vue'
export default defineComponent({
  components: { User, loginAccont },
  setup() {
    return {}
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
</style>
