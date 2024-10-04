import type { FC } from 'react'

import employees from '@/assets/images/employees.svg'
import price from '@/assets/images/price.svg'
import time from '@/assets/images/time.svg'

import styles from './StatisticsDepartment.module.scss'
import { IStatisticsDepartmentProps } from './statistics-department.types'

const StatisticsDepartment: FC<IStatisticsDepartmentProps> = ({
	img,
	title,
	description
}) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<img src={img} alt='' />
				<p>
					<strong>{title}</strong>
					<br />
					{description}
				</p>
			</div>
			<div>
				<div>
					<span>цена</span>
					<img src={price} alt='' />
					<span>1</span>
				</div>
				<div>
					<span>сотрудники</span>
					<img src={employees} alt='' />
					<span>1/3</span>
				</div>
				<div>
					<span>обрабатывается</span>
					<img src={time} alt='' />
					<span>2с</span>
				</div>
			</div>
			<div>
				<span>1</span>
				<span>25</span>
			</div>
		</div>
	)
}

export default StatisticsDepartment
