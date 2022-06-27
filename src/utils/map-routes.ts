import { RouteRecordRaw } from 'vue-router'
export function mapRoutesAction(userMenus: any): RouteRecordRaw[] {
  const Routes: RouteRecordRaw[] = []
  // 获取全部的路由
  const allRoutes: any = []
  const routesPaths = require.context('../router/main', true, /\.ts/)
  routesPaths.keys().forEach((path) => {
    // console.log('查找到的路径', path)
    // 获取路由对象对象
    const routePath = require('../router/main' + path.split('.')[1])
    allRoutes.push(routePath.default)
  })

  function _filterMenus(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 1) {
        // 一级菜单,有下级菜单
        _filterMenus(menu.children)
      } else {
        // 直接放入
        const route = allRoutes.find((route: any) => route.path === menu.url)
        if (route) {
          // 匹配了
          Routes.push(route)
        }
      }
    }
  }
  _filterMenus(userMenus)
  console.log('全部路由：', allRoutes)
  // console.log('最终匹配的路由', Routes)

  return Routes
}
