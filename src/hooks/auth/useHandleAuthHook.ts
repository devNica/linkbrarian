import { useAuthStore } from "../../store/auth"

interface AuthenticationHook {
    states: {
        isAuth: boolean
        token: string | null
    }
    actions: {
        clearCredentials: () => void
        loadCredentials: () => void
    }
}

export function useHandleAuthenticationHook(): AuthenticationHook {

    const { isAuth, token, logout } = useAuthStore()

    function clearCredentials() {
        logout()
    }

    function loadCredentials() {
        if (token !== null) {
            logout()
        }
    }

    return {
        states: {
            isAuth,
            token
        },
        actions: {
            clearCredentials,
            loadCredentials
        }
    }


}