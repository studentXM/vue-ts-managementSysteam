import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/NotFound/NotFound.vue'

// 导出类型
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  { path: '/:pathMatch(.*)', component: NotFound }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
