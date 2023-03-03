import { createApp } from 'vue'
// 全局注册图标组件
import * as icon from '@element-plus/icons-vue'

import 'normalize.css'
import '@/assets/css/base.css'
import App from './App.vue'
import store from '@/store'
import router from './router'
import { setupStore, icons } from './store'
const app = createApp(App)

app.use(router)
app.use(store)
// 刷新以后 重新从 存储中拿得token以及其他信息 存在vuex中
setupStore()
// 把icon图标全局注册
icons().forEach((key: string) => {
  let iconComponent = icon[key as keyof typeof icon]
  // 如果有不存在的icon就给默认值图标
  if (!iconComponent) {
    iconComponent = icon['More']
  }
  app.component(key, iconComponent)
})

app.mount('#app')
