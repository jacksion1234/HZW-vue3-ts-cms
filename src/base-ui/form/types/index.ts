type IFormType = 'input' | 'select' | 'password' | 'datepicker'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 其他属性
  otherOptions?: any
  // select的选项
  options?: any[]
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any // 行的配置，一行分为24份
  itemLayout: any
}
