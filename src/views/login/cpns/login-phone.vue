<template>
  <div>
    <el-form
      :rules="rules"
      :model="admin"
      label-width="65px"
      label-position="left"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="admin.phone" placeholder="手机号" />
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <div class="code-group">
          <el-input v-model="admin.code" placeholder="验证码" />
          <el-button type="primary" class="send-code">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const admin = reactive({ phone: '', code: '' })
    const rules = reactive({
      phone: [
        {
          required: true,
          message: '手机号有错',
          trigger: 'blur',
          min: 1
        }
      ],
      code: [
        {
          required: true,
          message: '密码规则有错',
          trigger: 'blur',
          min: 4
        }
      ]
    })
    const loginPhone = () => {
      console.log('手机号登录')
    }
    return { admin, rules, loginPhone }
  }
})
</script>
<style lang="less" scoped>
.code-group {
  display: flex;
  align-items: center;
}
.send-code {
  margin-left: 6px;
}
</style>
<style lang="less"></style>
