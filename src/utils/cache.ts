class LocalCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    localStorage.removeItem(key)
  }

  clearCache() {
    localStorage.clear()
  }
  saveToken(token: string) {
    this.setCache('token', token)
  }
  getToken() {
    const token = this.getCache('token')
    return token || ''
  }
}
export default new LocalCache()
