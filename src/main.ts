import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import '@/service/index'
const app = createApp(App)

app.use(router)
app.use(store)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
app.mount('#app')
