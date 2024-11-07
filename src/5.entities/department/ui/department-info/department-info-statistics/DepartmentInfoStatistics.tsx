import type { FC } from 'react'

import employeesLogo from '../../../assets/images/employees.svg'
import income from '../../../assets/images/income.svg'
import processingLogo from '../../../assets/images/processing.svg'

import styles from './DepartmentInfoStatistics.module.scss'
import { IDepartmentInfoStatisticsProps } from './department-info-statistics.types'
import { formatPrice, useCustomTranslation } from '@/6.shared'

const DepartmentInfoStatistics: FC<IDepartmentInfoStatisticsProps> = ({
	current_price,
	employees,
	processing,
	max_employees
}) => {
	const {
		price,
		seconds,
		employees: employessTranslation,
		processing: processingTranslation
	} = useCustomTranslation('department')
	return (
		<div className={styles.statistics}>
			<div>
				<h5>{price}</h5>
				<div>
					<img src={income} alt='' />
				</div>
				<span>{formatPrice(current_price)}</span>
			</div>
			<div>
				<h5>{employessTranslation}</h5>
				<div>
					<img src={employeesLogo} alt='' />
				</div>
				<span>
					{employees}/{max_employees}
				</span>
			</div>
			<div>
				<h5>{processingTranslation}</h5>
				<div>
					<img src={processingLogo} alt='' />
				</div>
				<span>
					{processing}
					{seconds}
				</span>
			</div>
		</div>
	)
}

export default DepartmentInfoStatistics
