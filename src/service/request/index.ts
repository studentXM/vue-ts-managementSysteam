import axios from 'axios'
import type { YHRequestConfig, AxiosInstance, YHInterceptors } from './type'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

// 按需引入减少包体积
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

class YHRequest {
  instance: AxiosInstance
  interceptors: YHInterceptors | undefined
  showLoading?: boolean
  loading?: LoadingInstance
  constructor(config: YHRequestConfig) {
    console.log(config)
    this.showLoading = config.showLoading
    // 创建实例
    this.instance = axios.create(config)
    // 取出拦截器
    this.interceptors = config.interceptors
    // 给实例添加拦截器 使用的是config传递过来的函数
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 全局拦截器 统一使用的函数 放到下面会先执行
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading'
          })
        }
        console.log('全局拦截器')
        return config
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log('全局响应拦截器')
        setTimeout(() => {
          this.loading?.close()
        }, 200)
        return response
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }
  request<T>(config: YHRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 动画开关设置对应值
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      } else {
        this.showLoading = true
      }
      // 调用接口传递的拦截器 并且赋值返回值
      if (config.interceptors?.requestInterceptor) {
        // 因为axios更新的缘故 这里需要做一个类型断言
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config = config.interceptors.requestInterceptor(config as any)
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseInterceptor) {
            // 因为axios更新的缘故 这里需要做一个类型断言
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            config = config.interceptors.responseInterceptor(config as any)
          }
          resolve(res)
        },
        (rej) => {
          reject(rej)
        }
      )
    })
  }

  get<T>(config: YHRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: YHRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: YHRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YHRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default YHRequest
