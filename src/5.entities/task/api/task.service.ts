import { instance } from '@/6.shared'

const BASE = '/task'

export const TaskService = {
	getTaskInvitation: async () => {
		const { data } = await instance.post<{ link: string }>(`${BASE}/invitation`)

		return data.link
	},
	getTaskSubscription: async () => {
		const { data } = await instance.post<{ link: string }>(
			`${BASE}/subscription`
		)
		return data.link
	}
}
