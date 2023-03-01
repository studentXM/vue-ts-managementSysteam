import { createStore } from 'vuex'

import { IRootState } from './types'

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

export default store
