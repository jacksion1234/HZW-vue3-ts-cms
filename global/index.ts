import registerEle from './register_elementPlus'
import { App } from 'vue'
export default function (app: App): void {
  app.use(registerEle)
}
