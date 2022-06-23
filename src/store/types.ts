import { LoginType } from './login/types'
export interface IRootState {
  name: string
}

export interface IModulesType {
  login: LoginType
}

export type IStoreType = IRootState & IModulesType
