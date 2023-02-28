import YHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const yhRequest = new YHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'awdhkhwdh'
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    responseInterceptor: (res) => {
      return res.data
    }
  },
  showLoading: true
})
export default yhRequest
