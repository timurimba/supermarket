import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import arrowTop from '../../assets/images/arrow-top.svg'
import hireEmployee from '../../assets/images/hire-employees.svg'

import styles from './DepartmentImprovement.module.scss'
import { IDepartmentImprovementProps } from './department-improvement.types'
import { useCustomTranslation } from '@/6.shared'

const DepartmentImprovement: FC<
	PropsWithChildren<IDepartmentImprovementProps>
> = ({ improvement, children }) => {
	const { title, description } = useCustomTranslation(
		`improvement.${improvement}`
	)

	return (
		<div className={styles.improvement}>
			<div
				className={cn({
					'bg-[#E8F1DD]': improvement === 'level',
					'bg-[#FFE7DA]': improvement === 'employee'
				})}
			>
				<img src={improvement === 'level' ? arrowTop : hireEmployee} alt='' />
			</div>
			<div>
				<strong>{title}</strong>
				<p>{description}</p>
			</div>
			{children}
		</div>
	)
}

export default DepartmentImprovement
