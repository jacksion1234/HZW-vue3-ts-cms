import axios from 'axios'
// console.log('adh')
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
axios
  .get('/get', {
    params: {
      name: '嘻哈'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.all([
  axios.get('http://httpbin.org/get').then((res) => {
    console.log(res.data)
  }),
  axios.post('http://httpbin.org/post').then((res) => {
    console.log(res.data)
  })
])
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)
axios.interceptors.response.use(
  (res) => {
    console.log(res.data)
  },
  (error) => {
    return error
  }
)
