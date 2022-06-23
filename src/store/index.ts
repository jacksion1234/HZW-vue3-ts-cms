import { createStore, Store, useStore as useVuexStorage } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login'

const store = createStore<IRootState>({
  state: {
    name: 'HZW'
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function recoverStore() {
  store.dispatch('login/loadLocalStorage')
}

export function useStore(): Store<IStoreType> {
  return useVuexStorage()
}
export default store
