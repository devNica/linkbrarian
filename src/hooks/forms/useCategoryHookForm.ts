import { useAuthStore } from "../../store/auth"
import { useMutation } from "@tanstack/react-query"
import { addCategoryAPI } from "../../api/categories"
import { useForm } from "react-hook-form"
import { ApiErrorModel, ApiModel } from "../../types/api"
import { CategoryAPI } from "../../types/category-api"

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
        onSuccess: (_response: ApiModel<CategoryAPI[]>) => { },
        onError: (error: ApiErrorModel) => {
            console.log(error)
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