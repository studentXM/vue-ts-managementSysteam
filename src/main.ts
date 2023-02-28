import { createApp } from 'vue'

import 'normalize.css'
import '@/assets/css/base.css'
import App from './App.vue'
import store from '@/store'
import router from './router'
const app = createApp(App)

app.use(router)
app.use(store)
// interface Data {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   data: any
// }

app.mount('#app')
