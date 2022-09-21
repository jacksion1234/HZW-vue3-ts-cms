import { App } from 'vue'
import registerEle from './register_elementPlus'
import registerProp from './register-properties'
export default function (app: App): void {
  app.use(registerEle)
  app.use(registerProp)
}
