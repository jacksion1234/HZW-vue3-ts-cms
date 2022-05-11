import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_http.ts'
// import 'element-plus'
// import 'element-plus/dist/index.css'

// import { ElButton } from 'element-plus'
// import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'
// import 'element-plus/lib/theme-chalk/el-button.css'

const app = createApp(App)
// app.use(ElementPlus)
// app.component(ElButton.name, ElButton)
app.use(store).use(router).mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
