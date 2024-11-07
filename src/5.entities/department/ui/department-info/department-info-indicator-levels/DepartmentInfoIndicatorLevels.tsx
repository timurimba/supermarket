import { type FC } from 'react'

import pointer from '../../../assets/images/pointer.svg'

import styles from './DepartmentInfoIndicatorLevels.module.scss'
import { IDepartmentInfoIndicatorLevelsProps } from './department-info-indicator-levels.types'

const DepartmentInfoIndicatorLevels: FC<
	IDepartmentInfoIndicatorLevelsProps
> = ({ current_level, current_max_level, current_min_level }) => {
	return (
		<div className={styles.wrapper}>
			<div className='absolute w-[90%]  top-0 left-1/2 -translate-x-1/2'>
				<img
					style={{
						left: `${((current_max_level - current_min_level - (current_max_level - Math.min(current_level, 100))) / 25) * 100}%`
					}}
					src={pointer}
					alt=''
				/>
			</div>
			<span>{current_min_level}</span>
			<span>{current_max_level}</span>
		</div>
	)
}

export default DepartmentInfoIndicatorLevels
