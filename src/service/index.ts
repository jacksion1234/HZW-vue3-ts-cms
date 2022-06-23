import ZWRequest from './request'
import { BASE_URL, timeout } from './request/config'
import Cache from '@/utils/cache'

const zwRequest = new ZWRequest({
  baseURL: BASE_URL,
  timeout: timeout,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('实例：请求成功', config)
      const token = Cache.getToken()
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (res: any) => {
      // console.log('实例：返回成功', res)
      return res
    }
  }
})
export default zwRequest
