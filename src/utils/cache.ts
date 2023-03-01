// 加密算法
import { Base64 } from 'js-base64'
class LocalCache {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCache(key: string, value: any) {
    if (key === 'password') {
      // 密码加密后再存储
      const password = Base64.encode(value)
      window.localStorage.setItem(key, password)
      return
    }
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)

    if (value) {
      if (key === 'password') {
        // 密码解密后再返回
        return Base64.decode(value)
      }
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
}

export default new LocalCache()
