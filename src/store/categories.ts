import { create } from 'zustand'
import { CategoryAPI } from '../types/category-api'

interface CategoryState {
    isLoading: boolean
    categories: CategoryAPI[]
    filled: boolean
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => void
}



export const useCategoriesStore = create<CategoryState>((set, _get) => ({
    isLoading: true,
    categories: [],
    filled: false,
    setCategories: (payload: Pick<CategoryState, 'categories' | 'filled'>) => set((state) => ({ ...state, ...payload }))

}))


export const { setCategories } = useCategoriesStore.getState()