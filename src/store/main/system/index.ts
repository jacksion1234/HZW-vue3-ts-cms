import { Module } from 'vuex'
import { ISystemType } from './types'
import { IRootState } from '../../types'
import { getPageListData } from '@/service/main/system/index'
const systemStore: Module<ISystemType, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    saveUsersList(state, usersList) {
      state.usersList = usersList
    },
    saveUsersCount(state, count) {
      state.usersCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 根据传来的pagename合成相应的接口名称，所以pagename要求和接口中的值一致，以及查询类接口命名时需要以list结尾
      const { pagename, queryInfo } = payload
      const url = `${pagename}/list`

      const res = await getPageListData(url, queryInfo)
      console.log('查询结果', res)
      const { list, totalCount } = res.data
      const savePageName =
        pagename.slice(0, 1).toUpperCase() + pagename.slice(1)
      // 保存到vuex中
      commit(`save${savePageName}List`, list)
      commit(`save${savePageName}Count`, totalCount)
    }
  },
  getters: {
    pageListData(state) {
      return (pagename: string) => {
        return (state as any)[`${pagename}List`]
      }
    },
    pageListCount(state) {
      return (pagename: string) => {
        return (state as any)[`${pagename}Count`]
      }
    }
  }
}

export default systemStore
