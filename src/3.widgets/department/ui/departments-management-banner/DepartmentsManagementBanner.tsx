import type { FC } from 'react'

import styles from './DepartmentsManagementBanner.module.scss'
import { IDepartmentsManagementBanner } from './departments-management-banner.types'
import building from '@/3.widgets/department/assets/images/building.svg'
import stats from '@/3.widgets/department/assets/images/stats.svg'
import { useCustomTranslation } from '@/6.shared/lib/hooks/useCustomTranslation'

const DepartmentsManagementBanner: FC<IDepartmentsManagementBanner> = ({
	type
}) => {
	const { title, description } = useCustomTranslation(type)
	return (
		<div className={styles.banner}>
			<img src={type === 'building' ? building : stats} alt='' />
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default DepartmentsManagementBanner
