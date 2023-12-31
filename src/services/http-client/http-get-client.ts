import { axiosClient } from './axios'

type HttpGetResponse<T = any> = Promise<T>

export const httpGetClient = async <T>(path: string): HttpGetResponse<T> => {
  const output = await axiosClient.get(path)
  return output.data
}
