import zwRequest from '../../service'
import { IAccount, ILoginResult } from './types'
import { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  RequestUserInfo = '/users/',
  RequestMenu = '/role/'
}
export function login(account: IAccount): Promise<IDataType<ILoginResult>> {
  return zwRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function getUserInfo(id: number): Promise<IDataType> {
  return zwRequest.get<IDataType>({
    url: LoginAPI.RequestUserInfo + id,
    showLoading: false
  })
}

export function getMenuByRoleId(roleId: number): Promise<IDataType> {
  return zwRequest.get<IDataType>({
    url: LoginAPI.RequestMenu + roleId + '/menu',
    showLoading: false
  })
}
