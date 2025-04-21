import { create } from 'zustand'
import { CategoryAPI } from '../types/category-api'

interface CategoryState {
    isLoading: boolean
    categories: CategoryAPI[]
    filled: boolean
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => void
    filterCategories: (filterFn: (category: CategoryAPI) => boolean) => CategoryAPI[]
}

export const useCategoriesStore = create<CategoryState>((set, get) => ({
    isLoading: true,
    categories: [],
    filled: false,
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => set((state) => ({ ...state, ...payload })),
    filterCategories: (filterFn) => {
        const { categories } = get()
        return categories.filter(filterFn)
    }

}))


export const { setCategories, categories, filterCategories } = useCategoriesStore.getState()