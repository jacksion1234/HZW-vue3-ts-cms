// const IconsResolver = require('unplugin-icons/resolver')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  outputDir: './cms-web',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      title: '后台管理系统'
    }
  },
  // publicPath: '/', // 改变相对路径，能使本地的包可以在本地访问资源，但是上到服务器中的包不要开启此配置
  // 直接通过CLI提供给我们的选项来配置
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver() // 自动导入图标组件
          // IconsResolver({
          //   prefix: 'Icon'
          // })
        ]
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          // IconsResolver({
          //   enabledCollections: ['ep']
          // }),
          ElementPlusResolver()
        ]
      })
    ]
  }
  // 通过configureWebpack修改webpack的配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 通过chainWebpack修改webpack的配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  //     .set('components', '@/components')
  //     .set('plugin', [
  //       AutoImport({
  //         resolvers: [ElementPlusResolver()]
  //       }),
  //       Components({
  //         resolvers: [ElementPlusResolver()]
  //       })
  //     ])
  // }
}
