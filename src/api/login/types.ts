export interface dataType {
  data: any
  returnCode: string
  success: boolean
}
export interface IAccount {
  name: string
  password: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
export interface ILoginResult {
  id: number
  name: string
  token: string
}
