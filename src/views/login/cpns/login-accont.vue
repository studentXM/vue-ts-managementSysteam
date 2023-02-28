<template>
  <div>
    <el-form :rules="rules" :model="admin" ref="formRef">
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
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const admin = reactive({ user: '', password: '' })
    const rules = reactive({
      user: [
        {
          required: true,
          message: '账号规则有错',
          trigger: 'blur',
          min: 1
        }
      ],
      password: [
        {
          required: true,
          message: '密码规则有错',
          trigger: 'blur',
          min: 1
        }
      ]
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccont = () => {
      // form组件有个函数 可以进行验证 返回布尔值
      formRef.value?.validate((res) => {
        console.log(res)
      })
    }
    return { admin, rules, loginAccont, formRef }
  }
})
</script>
<style lang="less" scoped></style>
<style lang="less"></style>
