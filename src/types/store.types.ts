interface IStoreInfo {
	price: number
	exists: boolean
	description: string
}

export interface IStore {
	name: EnumNameStoreItem
	info: IStoreInfo
}

export enum EnumNameStoreItem {
	MANAGER = 'manager',
	QUALITY = 'quality',
	SECURITY = 'security',
	VIDEO = 'video'
}