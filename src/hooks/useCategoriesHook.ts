import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "../store/auth"
import { fetchCategoriesAPI } from "../api/categories"
import { ApiModel } from "../types/api"
import { CategoryAPI } from "../types/category-api"
import { setCategories } from "../store/categories"
import { useEffect } from "react"

export function useFetchCategoriesHook() {
    const { user } = useAuthStore((state) => state)
    const userId = user?.userId

    const { isLoading, isError, isSuccess, data, error } = useQuery({
        queryKey: ['fetchCategories', userId],
        queryFn: (): Promise<ApiModel<CategoryAPI[]>> => fetchCategoriesAPI(userId!),
        enabled: !!userId,
        refetchOnWindowFocus: false, // Evitar peticiones innecesarias por recuperacion del foco sobre la ventana
        staleTime: 1000 * 60 * 5, // cada 5 minutos
        refetchInterval: 1000 * 60 * 2, // refetch Automatico cada 2 minutos
        retry: 3, // intentar 3 veces antes de dar error
        retryDelay: 1000 // esperar 1 seg entre cada intento
    })

    useEffect(() => {

        if (isSuccess) {
            setCategories({
                categories: data.meta,
                filled: data.meta.length > 0
            })
        } else if (isError) {
            // handle error
            console.log(error)
        }
    }, [isSuccess])


    return {
        states: {
            isLoading,
        },
    };
}
