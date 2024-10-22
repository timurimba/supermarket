import { instance } from '@/api/api.config'

import { IRatingResponse } from '@/types/rating.types'
import { IUser } from '@/types/user.types'

export const UserService = {
	getInfo: async () => {
		const { data } = await instance.get<IUser>('/management/user')

		return data
	},
	getRating: async (pageParam: number) => {
		const limit = 50
		const offset = limit * pageParam
		const { data } = await instance.get<IRatingResponse>(
			`/users/rating?limit=${limit}&offset=${offset}`
		)

		return data.users
	},
	setActivity: async () => {
		return await instance.post('/users/set_activity')
	}
}
