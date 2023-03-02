import { createApp } from 'vue'
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
const iconNames = icons()
console.log(iconNames)
// import { ...iconNames } from '@element-plus/icons-vue'

app.mount('#app')
