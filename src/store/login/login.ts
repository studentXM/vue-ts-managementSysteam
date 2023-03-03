import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import localCache from '@/utils/cache'

import router from '@/router'
const loginModle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async accountLogin({ commit }, payload: any) {
      const user = await accountLoginRequest(payload)
      const { id, token } = user.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userinfo', userInfo)

      // 权限菜单
      const userMenus = await requestUserMenusByRoleId(userInfo.role.id)
      console.log(userMenus.data)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus.data)

      // 跳转至首页
      router.push('/main')
    },

    async phoneLogin() {
      console.log('手机号登陆')
    },
    // 刷新以后 重新从 存储中拿得token以及其他信息 存在vuex中
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfoResult = localCache.getCache('userinfo')
      if (userInfoResult) {
        commit('changeUserInfo', userInfoResult)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  },
  getters: {}
}

export default loginModle
