import {
	EnumDepartmentName,
	IDepartment,
	IDepartmentManagement,
	IDepartmentStats
} from '../model/department.types'

import { instance } from '@/6.shared'

const BASE = '/management/department'

export const DepartmentService = {
	get: async (name: string) => {
		const { data } = await instance.get<IDepartment>(`${BASE}/${name}`)
		return data
	},
	getAll: async () => {
		const { data } = await instance.get<IDepartmentManagement[]>(`${BASE}`)

		return data
	},
	getStats: async () => {
		const { data } = await instance.get<IDepartmentStats[]>(`${BASE}/profit`)

		return data
	},
	buy: async (name: EnumDepartmentName) => {
		return await instance.post(`${BASE}/buy`, {
			department_name: name
		})
	},
	getNextLevelPrice: async (name: string) => {
		const { data } = await instance.get<{ price: number }>(
			`${BASE}/${name}/next_level`
		)

		return data.price
	},
	improveLevel: async (name: string) => {
		return await instance.post(`${BASE}/${name}/improve`)
	},
	getNextEmployeePrice: async (name: string) => {
		const { data } = await instance.get<{ price: number }>(
			`${BASE}/${name}/employee/price`
		)
		return data.price
	},
	buyEmployees: async (name: string) => {
		return await instance.post(`${BASE}/${name}/employee/hire`)
	}
}
