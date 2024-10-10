import { instance } from '@/api/api.config'

import { IShopItem } from '@/types/shop.types'

const BASE = '/store'

export const StoreService = {
	getAll: async () => {
		const { data } = await instance.get<IShopItem[]>(`${BASE}/item`)

		return data
	},
	buy: async (name: string) => {
		return await instance.post(`${BASE}/items/buy`, {
			item_name: name
		})
	}
}
