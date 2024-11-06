export enum EnumDepartmentName {
	BAKERY = 'bakery',
	FRUITS = 'fruits',
	SEAFOOD = 'seafood',
	MEAT = 'meat',
	PERFUMERY = 'perfumery',
	CLOTHING = 'clothing'
}

export interface IDepartment {
	current_level: number
	current_min_level: number
	current_max_level: number
	current_level_name: string
	current_price: number
	employees: number
	processing: number
}

export interface IDepartmentStats
	extends Pick<
		IDepartment,
		'current_level' | 'current_price' | 'current_level_name'
	> {
	name: string
	profit: number
}

export interface IDepartmentManagementInfo {
	price: 0
	exists: boolean
}

export interface IDepartmentManagement {
	name: EnumDepartmentName
	info: IDepartmentManagementInfo
}
