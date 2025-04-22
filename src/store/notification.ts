import { create } from "zustand"


interface NotificationState {
    type: 'success' | 'info' | 'error' | 'warning' | 'default'
    message: string | null
    delay: number
    resetNotification: () => void
    setNotification: (payload: Pick<NotificationState, 'type' | 'message' | 'delay'>) => void
}

export const useNotificationStore = create<NotificationState>((set, _get) => ({
    type: 'default',
    message: null,
    delay: 0,
    resetNotification: function (): void {
        set((state) => ({
            ...state,
            type: 'default',
            message: null,
            delay: 0,
        }))
    },
    setNotification(payload: Pick<NotificationState, 'type' | 'message' | 'delay'>) {
        set((state) => ({
            ...state,
            ...payload
        }))
    },
}))


export const { setNotification, resetNotification} = useNotificationStore.getState()