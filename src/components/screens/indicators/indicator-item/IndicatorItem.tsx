import type { FC } from 'react'

import dollar from '@/assets/images/dollar.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import { getImgDepartment } from '@/utils/get-img-department.utils'

import styles from './IndicatorItem.module.scss'
import { IDepartmentIndicator } from '@/types/department.types'

const IndicatorItem: FC<IDepartmentIndicator> = ({
	current_level,
	current_level_name,
	current_price,
	profit,
	name
}) => {
	const { title } = useCustomTranslation(name)
	const { titleLvl } = useCustomTranslation(`${name}.${current_level_name}`)
	const {
		profit: profitTranslation,
		price,
		min
	} = useCustomTranslation('indicators')

	return (
		<div className={styles.wrapper}>
			<div>
				<div>{current_level}</div>
				<img src={getImgDepartment(current_level_name)} alt='' />
			</div>
			<div>
				<h1>
					{title}
					<span>{titleLvl}</span>
				</h1>
				<div>
					<span>{price}</span>
					<strong>{current_price}</strong>
					<img src={dollar} alt='' />
				</div>
				<div>
					<span>{profitTranslation}</span>
					<strong>{profit}</strong>
					<img src={dollar} alt='' />
					<span>{min}.</span>
				</div>
			</div>
		</div>
	)
}

export default IndicatorItem
