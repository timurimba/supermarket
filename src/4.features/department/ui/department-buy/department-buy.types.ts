import { ButtonHTMLAttributes } from 'react'

import { EnumDepartmentName, IDepartmentManagementInfo } from '@/5.entities'

export interface IDepartmentBuyProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		IDepartmentManagementInfo {
	name: EnumDepartmentName
}
