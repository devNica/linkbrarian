import { useAuthStore } from "../store/auth"
import { useCategoriesStore } from "../store/categories"

interface CategorizedLinksProps {
    categoryId: string
}

function useCategorizedLinksHook(data: CategorizedLinksProps){
    const { user } = useAuthStore(state => state)
    const {  } = useCategoriesStore(state => state)

}