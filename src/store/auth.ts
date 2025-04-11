import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { UserLogged } from '../types/auth'

interface AuthState {
    token: string | null
    isAuth: boolean
    user: { userId: string, email: string } | null
    loginSuccess: (payload: UserLogged) => void
    logout: () => void
}

export const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            token: null,
            isAuth: false,
            user: null,
            loginSuccess: (payload) =>
                set(() => ({
                    token: payload.token,
                    user: {
                        userId: payload.user.userId,
                        email: payload.user.email
                    },
                    isAuth: true
                })),
            logout: () =>
                set(() => ({
                    token: null,
                    isAuth: false,
                    user: null
                }))
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)
