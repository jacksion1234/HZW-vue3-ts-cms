import { Module } from 'vuex'
import { ISystemType } from './types'
import { IRootState } from '../../types'
import { getPageListData } from '@/service/main/system/index'
import list from '@/router/main/story/list/list'
const systemStore: Module<ISystemType, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {},
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { url, queryInfo } = payload

      const res = await getPageListData(url, queryInfo)
      console.log('查询结果', res)
      const { list, totalCount } = res.data
    }
  },
  getters: {}
}

export default systemStore
