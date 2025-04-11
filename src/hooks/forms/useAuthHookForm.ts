import { useAuthStore } from "../../store/auth";
import { useMutation } from '@tanstack/react-query'
import { ApiErrorModel, ApiModel } from "../../types/api";
import { UserLogged } from "../../types/auth";
import { userAuthAPI } from "../../api/auth";
import { useForm } from "react-hook-form";

type AuthFormValues = {
    email: string
}

export function useAuthHookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormValues>()

    const { loginSuccess } = useAuthStore()

    const authMutation = useMutation({

        mutationFn: (data: AuthFormValues) => userAuthAPI(data),  
        onSuccess: (response: ApiModel<UserLogged>) => loginSuccess(response.meta),
        onError: (error: ApiErrorModel) => {
            console.log(error)
        }
    })

    const onSubmit = (data: AuthFormValues) => {
        authMutation.mutate(data)
    }

    return {
        register,
        errors,
        onSubmit: handleSubmit(onSubmit)
    }
}