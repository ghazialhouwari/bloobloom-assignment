export interface CollectionItem {
    image: string,
    name: string,
}
export interface Collection {
    id: number,
    name: string,
    configuration_name: string,
}

export interface CollectionMenu {
    id?: number,
    name: string,
    subMenu?: CollectionMenu[]
}