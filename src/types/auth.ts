export interface UserLogged {
    user: {
        userId: string
        email: string
    }
    token: string
}