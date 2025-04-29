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


export interface CategoryAPI {
    categoryId: string
    name: string
    collectionSize: number
    userId?: string
}


export interface LinkAPI {
    id: string
    videoId: string
    linkURL: string
    linkName: string
    linkDescription: string
    isFavorite: boolean
    isShared: boolean
    includeIn: number
}