export interface ApiModel<T> {
    meta: T
    message: string
}

export interface ApiErrorModel {
    meta: {
        errorName: string,
        messages: string[]
    },
    message: string
}