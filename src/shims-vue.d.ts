// import { ComponentCustomProperties } from '@vue/runtime-core'
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $filters: any; // 这里填类型
//   }
// }
// // 必须导出，才能在其他文件中使用
// export default ComponentCustomProperties;
// declare module 'element-plus'
