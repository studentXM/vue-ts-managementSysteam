<template>
  <div>
    <el-form
      :inline="true"
      :rules="rules"
      :model="admin"
      class="demo-form-inline"
    >
      <el-form-item label="账号" prop="user">
        <el-input v-model="admin.user" placeholder="账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="admin.password" placeholder="密码" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { FormRules } from 'element-plus'
export default defineComponent({
  setup() {
    const admin = reactive({ user: '', password: '' })
    const rules = reactive<FormRules>({
      user: [
        {
          required: true,
          message: '账号有错',
          trigger: 'blur',
          min: 1
        }
      ]
    })

    return { admin, rules }
  }
})
</script>
<style></style>
