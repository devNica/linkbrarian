import { create } from 'zustand'
import { CategoryAPI, LinkAPI } from '../types/api'

interface CategoryState {
    isLoading: boolean
    categories: CategoryAPI[]
    categoryLinks: LinkAPI[]
    filled: boolean
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => void
    setCategoryLinks: (payload: Pick<CategoryState, 'categoryLinks'>) => void
    filterCategories: (filterFn: (category: CategoryAPI) => boolean) => CategoryAPI[]
}

export const useCategoriesStore = create<CategoryState>((set, get) => ({
    isLoading: true,
    categories: [],
    categoryLinks: [],
    filled: false,
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => set((state) => ({ ...state, ...payload })),
    setCategoryLinks: (payload: Pick<CategoryState, 'categoryLinks'>) => set((state)=> ({
        ...state, ...payload
    })),
    filterCategories: (filterFn) => {
        const { categories } = get()
        return categories.filter(filterFn)
    }

}))


export const { setCategories, categories, filterCategories } = useCategoriesStore.getState()