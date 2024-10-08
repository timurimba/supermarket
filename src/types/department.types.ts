export interface IDepartment {
	current_level: number
	current_level_name: string
	current_price: number
	employees: number
	processing: number
}

interface IDepartmentManegementInfo {
	price: 0
	exists: boolean
}

export interface IDepartmentManegement {
	name: string
	info: IDepartmentManegementInfo
}
