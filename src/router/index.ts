import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Main from '../views/main/main.vue'
import LocalStorage from '../utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, next) => {
  if (to.path !== '/login') {
    // 不是登录页，判断是否有token，如果有，则直接进入，没有，则返回登录页
    const token = LocalStorage.getToken()
    if (!token) {
      return '/login'
    }
  }
})
export default router
