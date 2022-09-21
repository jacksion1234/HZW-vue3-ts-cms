import zwRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, payload: any): Promise<IDataType> {
  return zwRequest.post<IDataType>({
    url,
    data: payload
  })
}
