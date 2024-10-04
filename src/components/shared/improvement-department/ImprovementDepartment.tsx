import type { FC } from 'react'

import dollar from '@/assets/images/dollar.svg'
import base from '@/assets/images/improve-arrow.svg'
import employee from '@/assets/images/improve-employee.svg'

import styles from './ImprovementDepartment.module.scss'
import { IImprovementDepartmentProps } from './improvement-department.types'

const ImprovementDepartment: FC<IImprovementDepartmentProps> = ({
	improve,
	type,
	title
}) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<img src={type === 'base' ? base : employee} alt='' />
				<div>
					<strong>{type === 'employee' ? 'НАНЯТЬ СОТРУДНИКОВ' : title}</strong>
					<p>
						{type === 'employee'
							? 'Увеличивает количевство сотрудников на 1'
							: 'Увеличивает прибыль'}
					</p>
				</div>
			</div>
			<button onClick={improve}>
				<span className={`${type === 'base' ? 'lowercase' : 'uppercase'}`}>
					{type === 'base' ? 'Улучшить' : 'Нанять'}
				</span>
				<div>
					<span>100</span>
					<img src={dollar} alt='' />
				</div>
			</button>
		</div>
	)
}

export default ImprovementDepartment
