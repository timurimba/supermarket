import { IMyRating, IRatingResponse, IUser } from '../model/user.types'

import { instance } from '@/6.shared'

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
	getRank: async () => {
		const { data } = await instance.get<IMyRating>('/users/user_rank')
		return data
	}
}
