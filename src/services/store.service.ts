import { instance } from '@/api/api.config'

import { IStore } from '@/types/store.types'

const BASE = '/store'

export const StoreService = {
	getAll: async () => {
		const { data } = await instance.get<IStore[]>(`${BASE}/item`)

		return data
	},
	buy: async (name: string) => {
		const { data } = await instance.post<string>(
			`${BASE}/items/buy?item_name=${name}`
		)
		return data
	},
	getSpecialOffer: async () => {
		const { data } = await instance.get<IStore>(`${BASE}/special_offer`)
		return data
	}
}
