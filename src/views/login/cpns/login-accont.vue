<template>
  <div>
    <el-form :rules="rules" :model="admin" ref="formRef">
      <el-form-item label="账号" prop="user">
        <el-input v-model="admin.user" placeholder="账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="admin.password" placeholder="密码" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    // 如果存储了账号密码 就在账号密码变量中赋值
    const admin = reactive({
      user: localCache.getCache('user') ?? '',
      password: localCache.getCache('password') ?? ''
    })
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
    const loginAccont = (isKeepPassword: boolean) => {
      // console.log(store.login.state.token)
      // form组件有个函数 可以进行验证 返回布尔值
      formRef.value?.validate(async (vaild) => {
        // 表单验证成功
        if (vaild) {
          await store.dispatch('login/accountLogin', {
            name: admin.user,
            password: admin.password
          })
          // 记住密码
          if (isKeepPassword) {
            // 成功登陆时
            localCache.setCache('user', admin.user)
            localCache.setCache('password', admin.password)
          } else {
            localCache.deleteCache('user')
            localCache.deleteCache('password')
          }
        }
      })
    }
    return { admin, rules, loginAccont, formRef }
  }
})
</script>
<style lang="less" scoped></style>
<style lang="less"></style>
