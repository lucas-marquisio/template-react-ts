import { axiosClient } from './axios'

type HttpPostResponse<T = any> = Promise<T>

export const httpPostClient = async <T>(path: string, data: any): HttpPostResponse<T> => {
  const output = await axiosClient.post(path, data)
  return output.data
}
