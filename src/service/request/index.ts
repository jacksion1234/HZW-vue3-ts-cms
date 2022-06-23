import axios from 'axios'
import { AxiosInstance } from 'axios'
import { ZWRequestConfig, ZWRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true
class ZWRequest {
  instance: AxiosInstance
  interceptors?: ZWRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: ZWRequestConfig) {
    this.instance = axios.create(config)
    // 1.基本参数
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 2.从config中取出拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestErrorInterceptor
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseErrorInterceptor
    )
    // 3.共有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('共有的请求时成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            background: 'rgba(0, 0, 0, 0.6)',
            text: '加载中',
            fullscreen: true
          })
        }
        return config
      },
      (error) => {
        // console.log('共有的请求时失败拦截')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        // console.log('共有的返回时成功的拦截')
        const data = res.data
        if (data.returnCode === '20001') {
          alert(data.returnMessage)
        } else {
          return data
        }
      },
      (error) => {
        this.loading?.close()
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        switch (error.response.status) {
          case 401:
            ElMessage.error('无效的token')
            break
          case 404:
            ElMessage.error('404错误')
            break
          default:
            ElMessage.error('网络出错啦')
        }
        if (error.response.status === 404) {
          console.log('404的错误~')
        }
        // console.log('共有的返回时失败的拦截')
        return error
      }
    )
  }

  request<T>(config: ZWRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 对单独请求传来的拦截器进行处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        // 代表该请求不想显示加载动画
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 每次请求返回后将showLoading的值改为默认值，以免被这次请求穿的配置影响下一次请求的加载动画显示
          this.showLoading = DEFAULT_LOADING
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
          // console.log(res)
        })
        .catch((error) => {
          console.log(error)
          this.showLoading = DEFAULT_LOADING
          reject(error)
        })
    })
  }
  get<T>(config: ZWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ZWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ZWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: ZWRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ZWRequest
