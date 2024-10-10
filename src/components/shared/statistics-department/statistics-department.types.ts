import { IDepartment } from '@/types/department.types'

export interface IStatisticsDepartmentProps extends Partial<IDepartment> {
	img?: string
	title: string
	description: string
}
