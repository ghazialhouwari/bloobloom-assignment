export interface CollectionResponse {
    id: number,
    name: string,
    configuration_name: string,
}
interface MetaResponse {
    total_count: number,
}

export interface CollectionsResponse {
    collections: CollectionResponse[],
    meta: MetaResponse,
}

export interface Collection {
    link?: string,
    name: string,
    subMenu: Collection[]
}

export interface GlassMedia {
    id: number,
    medium_type: string,
    mime_type: string,
    file_location: string,
    file_name: string,
    original_file_name: string,
    size: number,
    url: string,
    position: number,
}

export interface GlassColour {
    id: number,
    name: string,
    media: GlassMedia[],
}

export interface GlassFrameVariant {
    id: number,
    name: string,
    configuration_name: string,
    status: string,
    colour: GlassColour,
}

export interface GlassVariant {
    id: number,
    frame_variant: GlassFrameVariant,
    media: GlassMedia[],
}

export interface Glass {
    id: number,
    name: string,
    configuration_name: string,
    glass_variants: GlassVariant[]
}

export interface GlassesResponse {
    glasses: Glass[],
    meta: MetaResponse,
}

export interface KeyValuePair {
    name: string,
    val: string,
}