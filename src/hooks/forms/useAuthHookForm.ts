import { useAuthStore } from "../../store/auth";
import { useMutation } from '@tanstack/react-query'
import { ApiModel } from "../../types/api";
import { UserLogged } from "../../types/auth";
import { userAuthAPI } from "../../api/auth";
import { useForm } from "react-hook-form";
import { setNotification } from "../../store/notification";

type AuthFormValues = {
    email: string
    password: string
}

export function useAuthHookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormValues>()

    const { loginSuccess } = useAuthStore()

    const authMutation = useMutation({

        mutationFn: (data: AuthFormValues) => userAuthAPI(data),
        onSuccess: (response: ApiModel<UserLogged>) => loginSuccess(response.meta),
        onError: (error: string) => {
            setNotification({
                type: 'error',
                message: error,
                delay: 5000
            })
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