import { IStore } from '../model/store.types'

import { instance } from '@/6.shared'

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
