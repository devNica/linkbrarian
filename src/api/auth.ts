import axiosInstance from "../services/http-client.service"
import { httpHandler } from "../services/http-handler.service"
import { UserLogged } from "../types/auth"

interface AuthSigning {
    email: string | null
}

export const userAuthAPI = async (data: AuthSigning) => {
    
    const response =  await httpHandler<AuthSigning, UserLogged>({
        instance: axiosInstance,
        endpoint: '/auth/signin',
        method: 'POST',
        body: data
    })

    return response
}