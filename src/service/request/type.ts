import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

interface YHInterceptors<T = AxiosResponse> {
  // 新版axios使用InternalAxiosRequestConfig
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig

  requestInterceptorCatch?: (error: Error) => Error
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: Error) => Error
  showLoading?: boolean
}

// 生成一个新的接口 继承axios config的类型 并且新增了拦截器类型
interface YHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YHInterceptors<T>
  showLoading?: boolean
}

export { YHRequestConfig, AxiosInstance, YHInterceptors, AxiosRequestConfig }
