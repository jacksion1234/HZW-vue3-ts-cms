import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalStorage from '../utils/cache'
// import NOTFOUND from '../views/not-found/NOTFOUND.vue'
const Login = () => import('../views/login/login.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')
const NOTFOUND = () => import('../views/not-found/NOTFOUND.vue')
const Main = () => import('../views/main/main.vue')

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
    name: 'main',
    component: Main
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NOTFOUND',
    component: NOTFOUND
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
