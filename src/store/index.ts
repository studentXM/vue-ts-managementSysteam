/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'
import LocalCache from '@/utils/cache'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return { vname: '你好世界', height: 200 }
  },
  mutations: {
    change(state) {
      console.log(state.vname)
    }
  },
  getters: {},
  actions: {},
  modules: { login }
})
// 刷新以后 重新从 存储中拿得token以及其他信息 存在vuex中
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

// 设置全局icon组件
export function icons() {
  const icons = LocalCache.getCache('userMenus').map((i: any) => {
    const str = i.icon.replace('el-icon-', '')
    const upaer = str[0].toUpperCase()
    return str.replace(str[0], upaer, 0)
  })
  return icons
}

export default store
