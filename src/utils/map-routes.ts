import { menuEmits } from 'element-plus'
import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

const firstName: string | null = null
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
export function pathBreadcrumb(menus: any[], currentPath: string) {
  const breadcrumbList: IBreadcrumb[] = []
  pathMapToMenu(menus, currentPath, breadcrumbList)
  return breadcrumbList
}
export function pathMapToMenu(
  menus: any[],
  currentPath: string,
  breadcrumbList?: IBreadcrumb[]
): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      // 一级菜单，继续递归
      if (menu.children && menu.children.length > 0) {
        const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
        if (findMenu) {
          breadcrumbList?.push({ name: menu.name })
          breadcrumbList?.push({ name: findMenu.name })
          return findMenu
        }
      }
    } else {
      breadcrumbList?.push({ path: menu.url, name: menu.name })
      // 二级菜单，直接返回
      if (currentPath === menu.url) {
        return menu
      }
    }
  }
  // const res = menus.find((menu: any) => {
  //   // console.log(menu, currentPath)
  //   if (menu.type === 1) {
  //     // 一级菜单，继续递归
  //     if (menu.children && menu.children.length > 0) {
  //       pathMapToMenu(menu.children, currentPath)
  //     }
  //   } else {
  //     // 二级菜单，直接返回
  //     if (currentPath === menu.url) {
  //       return true
  //     }
  //   }
  // })
  // return res
}
