import yhRequest from '..'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '@/service/typed'

enum LoginAPI {
  AccountLogin = '/login', //登陆
  LoginuserInfo = '/users/', //users/1 用户信息
  UserMenus = '/role/' //role/1/menu 权限菜单
}

export function accountLoginRequest(account: IAccount) {
  return yhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
    // showLoading: false
  })
}

export function requestUserInfoById(id: number) {
  return yhRequest.get<IDataType>({
    url: LoginAPI.LoginuserInfo + id
    // showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return yhRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
    // showLoading: false
  })
}
