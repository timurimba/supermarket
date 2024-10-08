interface IStoreInfo {
	price: number
	exists: boolean
	description: string
}

export interface IStore {
	name: string
	info: IStoreInfo
}
