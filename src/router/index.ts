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

router.beforeEach((to, from) => {
  console.log('路由守卫')
  const token = window.localStorage.getItem('token')
  // 跳转至非登陆页面
  if (to.path !== '/login') {
    // 需要进行token验证
    if (!token) {
      return '/login'
    }
  }
})
export default router
