import { IDepartment } from '@/5.entities'

export interface IDepartmentInfoIndicatorLevelsProps
	extends Pick<
		IDepartment,
		'current_level' | 'current_max_level' | 'current_min_level'
	> {}
