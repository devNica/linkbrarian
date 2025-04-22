import { useAuthStore } from "../../store/auth"
import { useMutation } from "@tanstack/react-query"
import { addCategoryAPI } from "../../api/categories"
import { useForm } from "react-hook-form"
import { ApiModel } from "../../types/api"
import { CategoryAPI } from "../../types/category-api"
import { setNotification } from "../../store/notification"

interface CategoryFormValues {
    categoryName: string
}

export default function useCategoryHookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<CategoryFormValues>()
    const { user } = useAuthStore(state => state)

    const mutation = useMutation({

        mutationFn: (data: CategoryFormValues) => addCategoryAPI({
            name: data.categoryName,
            userId: user?.userId!
        }),
        onSuccess: (response: ApiModel<CategoryAPI[]>) => {
            setNotification({
                type: 'success',
                message: response.message,
                delay: 5000
            })
        },
        onError: (error: string) => {
            setNotification({
                type: 'error',
                message: error,
                delay: 5000
            })
        }
    })

    const onSubmit = (data: CategoryFormValues) => {
        mutation.mutate(data)
    }

    return {
        register,
        errors,
        onSubmit: handleSubmit(onSubmit)
    }

}