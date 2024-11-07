import type { FC } from 'react'

import { IDepartment } from '../../model/department.types'

import styles from './DepartmentInfo.module.scss'
import DepartmentInfoHeading from './department-info-heading/DepartmentInfoHeading'
import DepartmentInfoIndicatorLevels from './department-info-indicator-levels/DepartmentInfoIndicatorLevels'
import DepartmentInfoStatistics from './department-info-statistics/DepartmentInfoStatistics'

const DepartmentInfo: FC<{ department: IDepartment; name: string }> = ({
	department,
	name
}) => {
	return (
		<div className={styles.info}>
			<DepartmentInfoHeading
				name={name}
				current_level_name={department.current_level_name}
			/>
			<DepartmentInfoStatistics
				max_employees={department.max_employees}
				employees={department.employees}
				current_price={department.current_price}
				processing={department.processing}
			/>
			<DepartmentInfoIndicatorLevels
				current_level={department.current_level}
				current_max_level={department.current_max_level}
				current_min_level={department.current_min_level}
			/>
		</div>
	)
}

export default DepartmentInfo
