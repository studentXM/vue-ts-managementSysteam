import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import yhRequest from '@/service/index'
const app = createApp(App)

app.use(router)
app.use(store)
interface Data {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}
yhRequest
  .request<Data>({
    method: 'GET',
    url: '',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('接口拦截器')
        return config
      }
    }
  })
  .then((res) => {
    console.log(res)
  })

app.mount('#app')
