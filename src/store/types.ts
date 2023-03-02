import { ILoginState } from './login/types'
export interface IRootState {
  vname: string
  age?: number
}

export interface IRootWithMoudle {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithMoudle
