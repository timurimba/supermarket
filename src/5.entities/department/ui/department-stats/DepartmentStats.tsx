import type { FC } from 'react'

import styles from './DepartmentStats.module.scss'
import { IDepartmentStats } from '@/5.entities'
import {
	Animated,
	dollar,
	getImgDepartment,
	useCustomTranslation
} from '@/6.shared'

const DepartmentStats: FC<IDepartmentStats> = ({
	current_level,
	current_level_name,
	name,
	current_price,
	profit
}) => {
	const { title } = useCustomTranslation(name)
	const { title: titleLvl } = useCustomTranslation(
		`${name}.${current_level_name}`
	)
	const {
		min,
		price,
		profit: profitTranslation
	} = useCustomTranslation('stats')

	return (
		<Animated className={styles.wrapper}>
			<div>
				<span>{current_level}</span>
				<img src={getImgDepartment(current_level_name)} alt='' />
			</div>
			<div>
				<div>
					<h3>{title}</h3>
					<span>{titleLvl}</span>
				</div>
				<div>
					<div>
						{price}: <span>{current_price}</span> <img src={dollar} alt='' />
					</div>
					<div>
						{profitTranslation}: <span>{profit}</span>{' '}
						<img src={dollar} alt='' /> {min}
					</div>
				</div>
			</div>
		</Animated>
	)
}

export default DepartmentStats
