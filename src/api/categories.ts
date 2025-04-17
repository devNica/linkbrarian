import axiosInstance from "../services/http-client.service"
import { httpHandler } from "../services/http-handler.service"
import { CategoryAPI } from "../types/category-api"


export const fetchCategoriesAPI = async (userId: string) => {
    
    const response =  await httpHandler<{}, CategoryAPI[]>({
        instance: axiosInstance,
        endpoint: `/users/${userId}/categories`,
        method: 'GET',
        body: {}
    })

    return response
}