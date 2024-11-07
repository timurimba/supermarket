import { IDepartment } from '@/5.entities'

export interface IDepartmentInfoStatisticsProps
	extends Pick<
		IDepartment,
		'employees' | 'current_price' | 'processing' | 'max_employees'
	> {}
