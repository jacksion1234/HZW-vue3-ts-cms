import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ZWRequest from './service'
import 'normalize.css'
import '../src/assets/css/index.less'
import Global from '../global/index'
// import './service/axios_demo.ts'
// import 'element-plus'
// import 'element-plus/dist/index.css'

// import { ElButton } from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'
// import 'element-plus/lib/theme-chalk/el-button.css'

const app = createApp(App)
app.use(Global)
// app.use(ElementPlus)
// app.component(ElButton.name, ElButton)
app.use(store).use(router).mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
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
interface dataType {
  data: any
  returnCode: string
  success: boolean
}
ZWRequest.get<dataType>({
  url: '/home/multidata'
  // method: 'GET'
  // showLoading: false
}).then((res) => {
  // console.log(res.data)
  // console.log(res.returnCode)
  // console.log(res.success)
})
