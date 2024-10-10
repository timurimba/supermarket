import { instance } from '@/api/api.config'

import { IUser } from '@/types/user.types'

export const UserService = {
	getInfo: async () => {
		const { data } = await instance.get<IUser>('/management/user')

		return data
	}
}
