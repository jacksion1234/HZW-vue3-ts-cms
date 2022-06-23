let BASE_URL = ''
const timeout = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://httpbin.org'
}

export { BASE_URL, timeout }
