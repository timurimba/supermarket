import { ButtonHTMLAttributes } from 'react'

interface BaseDepartmentImproveProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	name: string
	price: number
	improvement: 'level' | 'employee'
}

export type TypeDepartmentImproveProps =
	| (BaseDepartmentImproveProps & { isCompleted?: false })
	| (Partial<BaseDepartmentImproveProps> & { isCompleted: true })
