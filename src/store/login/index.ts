import { Module } from 'vuex'
import { LoginType } from './types'
import { getUserInfo, login, getMenuByRoleId } from '../../api/login/index'
import { IAccount } from '@/api/login/types'
import { mapRoutesAction } from '../../utils/map-routes'
import LocalCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<LoginType, any> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: {}
    }
  },
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
      // 加载动态路由
      const asyncRoutes = mapRoutesAction(userMenu)
      console.log('异步路由：', asyncRoutes)

      asyncRoutes.forEach((route) => {
        router.addRoute('main', route)
      })
      // console.log('最终的实际路由', router)
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      console.log('调用loginAction', payload)
      // 1.实现登录逻辑
      const result = await login(payload)
      const { id, token } = result.data
      commit('saveToken', token)
      // 在本地保存token
      LocalCache.saveToken(token)
      // login

      // 2.请求用户信息
      const userInfoResult = await getUserInfo(id)
      console.log('用户信息', userInfoResult)
      const userInfo = userInfoResult.data
      commit('saveUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3.获取用户菜单信息
      const userMenuResult = await getMenuByRoleId(userInfo.role.id)
      console.log('用户菜单信息', userMenuResult)
      const userMenu = userMenuResult.data
      commit('saveUserMenu', userMenu)
      LocalCache.setCache('userMenu', userMenu)

      // 4.路由跳转到首页
      router.push('/main')
    },
    // 为了刷新时回显vuex中存的值
    loadLocalStorage({ commit }) {
      const token = LocalCache.getToken()
      if (token) {
        commit('saveToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      const userMenu = LocalCache.getCache('userMenu')
      if (userInfo) {
        commit('saveUserMenu', userMenu)
      }
    }
  },

  getters: {}
}

export default loginModule
