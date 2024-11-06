import { IDepartment } from '@/5.entities'

export interface IDepartmentInfoHeadingProps
	extends Pick<IDepartment, 'current_level_name'> {
	name: string
}
