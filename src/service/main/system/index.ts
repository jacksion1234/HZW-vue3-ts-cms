import zwRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(
  url: string,
  payload: any
): Promise<IDataType<any>> {
  return zwRequest.post<IDataType<any>>({
    url,
    data: payload
  })
}
