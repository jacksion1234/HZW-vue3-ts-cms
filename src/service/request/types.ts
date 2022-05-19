import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZWRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig // 这是个函数类型
  requestErrorInterceptor?: (error: any) => any
  responseInterceptor?: (config: T) => T // 在此处的类型是根据外部传来的类型来决定的,这个很重要
  responseErrorInterceptor?: (error: any) => any
}
export interface ZWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZWRequestInterceptors<T>
  showLoading?: boolean
}
