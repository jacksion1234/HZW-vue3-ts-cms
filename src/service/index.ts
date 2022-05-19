import ZWRequest from './request'
import { BASE_URL, timeout } from './request/config'

const zwRequest = new ZWRequest({
  baseURL: BASE_URL,
  timeout: timeout,
  interceptors: {
    requestInterceptor: (config: any) => {
      // console.log('实例：请求成功', config)
      return config
    },
    responseInterceptor: (res: any) => {
      // console.log('实例：返回成功', res)
      return res
    }
  }
})
export default zwRequest
