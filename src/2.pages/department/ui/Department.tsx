import type { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { getBgColor } from '../lib/get-bg-color/get-bg-color'

import styles from './Department.module.scss'
import { DepartmentBusiness } from '@/3.widgets'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Department: FC = () => {
	const { pathname } = useLocation()
	const department = pathname.split('/')[2]
	const { title } = useCustomTranslation(department)

	return (
		<div className={styles.department}>
			<Title>{title}</Title>
			<div style={{ backgroundColor: getBgColor(department) }}>
				<DepartmentBusiness />
			</div>
		</div>
	)
}

export default AnimatedPage(Department)
