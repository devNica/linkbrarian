import { AxiosInstance, AxiosResponse, Method } from 'axios'
import { ApiModel } from '../types/api'

interface HttpHandlerOptions<T> {
  instance: AxiosInstance
  endpoint: string
  method?: Method
  body?: T
  params?: Record<string, any>
  token?: string
  headers?: Record<string, string>
  abort?: AbortController
}

export const httpHandler = async <T, S>({
  instance,
  endpoint,
  method = 'GET',
  body,
  params,
  token,
  headers,
  abort,
}: HttpHandlerOptions<T>): Promise<ApiModel<S>> => {
  try {
    const response: AxiosResponse<ApiModel<S>> = await instance.request<ApiModel<S>>({
      url: endpoint,
      method,
      params,
      data: body,
      signal: abort?.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}
