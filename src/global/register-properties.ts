import { App } from 'vue'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo: () => {
      console.log('foo')
    }
  }
}
