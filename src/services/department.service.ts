import { instance } from '@/api/api.config'

import {
	EnumDepartmentName,
	IDepartment,
	IDepartmentManagement,
	IDepartmentNextLevel
} from '@/types/department.types'

const BASE = '/management/department'

export const DepartmentService = {
	get: async (name?: EnumDepartmentName) => {
		const { data } = await instance.get<IDepartment>(`${BASE}/${name}`)

		return data
	},
	getAll: async () => {
		const { data } = await instance.get<IDepartmentManagement[]>(`${BASE}`)

		return data
	},
	buy: async (name: EnumDepartmentName) => {
		return await instance.post(`${BASE}/buy`, {
			department_name: name
		})
	},
	getNextLevelPrice: async (name: EnumDepartmentName) => {
		const { data } = await instance.get<IDepartmentNextLevel>(
			`${BASE}/${name}/next_level`
		)

		return data.price
	},
	improveLevel: async (name: EnumDepartmentName) => {
		return await instance.post(`${BASE}/${name}/improve`)
	},
	getNextEmployeePrice: async (name: EnumDepartmentName) => {
		const { data } = await instance.get<{ price: number }>(
			`${BASE}/${name}/employee/price`
		)
		return data.price
	},
	buyEmployees: async (name: EnumDepartmentName) => {
		return await instance.post(`${BASE}/${name}/employee/hire`)
	}
}
