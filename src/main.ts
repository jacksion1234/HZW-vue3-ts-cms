import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { recoverStore } from './store'
// import ZWRequest from './service'
import '../src/assets/css/index.less'
import Global from './global/index'

// import { ElButton } from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
recoverStore()
app.use(Global)
// app.use(ElementPlus)
// app.component(ElButton.name, ElButton)
app.use(store).use(router).mount('#app')
// ZWRequest.request({
//   url: '/post',
//   method: 'POST',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的请求成功拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独请求的响应成功拦截')
//       return res
//     }
//   }
// })
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// ZWRequest.get<dataType>({
//   url: '/home/multidata'
//   // method: 'GET'
//   // showLoading: false
// }).then((res) => {
//   // console.log(res.data)
//   // console.log(res.returnCode)
//   // console.log(res.success)
// })
