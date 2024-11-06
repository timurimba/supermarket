import { DepartmentService } from './api/department.service'
import type {
	IDepartment,
	IDepartmentManagementInfo,
	IDepartmentStats
} from './model/department.types'
import { EnumDepartmentName } from './model/department.types'
import DepartmentBuilding from './ui/department-building/DepartmentBuilding'
import DepartmentInfo from './ui/department-info/DepartmentInfo'
import DepartmentStats from './ui/department-stats/DepartmentStats'

export {
	DepartmentBuilding,
	DepartmentInfo,
	DepartmentService,
	DepartmentStats,
	EnumDepartmentName,
	IDepartment,
	type IDepartmentManagementInfo,
	type IDepartmentStats
}
