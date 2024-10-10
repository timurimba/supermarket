import { type FC, useEffect, useRef, useState } from 'react'

import employeesImg from '@/assets/images/employees.svg'
import cursorLvl from '@/assets/images/pointer-level.svg'
import price from '@/assets/images/price.svg'
import time from '@/assets/images/time.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './StatisticsDepartment.module.scss'
import { IStatisticsDepartmentProps } from './statistics-department.types'

const StatisticsDepartment: FC<IStatisticsDepartmentProps> = ({
	img,
	title,
	description,
	current_price,
	employees,
	processing,
	current_level,
	current_max_level,
	current_min_level
}) => {
	const [imgWidth, setImgWidth] = useState(0)
	const [rangeWidth, setRangeWidth] = useState(0)

	const rangeRef = useRef<null | HTMLDivElement>(null)
	const imgRef = useRef<null | HTMLImageElement>(null)

	const {
		price: priceT,
		employees: employeesT,
		processing: processingT
	} = useCustomTranslation('statistics_department')

	useEffect(() => {
		if (rangeRef.current && imgRef.current) {
			setImgWidth(imgRef.current.offsetWidth)
			setRangeWidth(rangeRef.current.offsetWidth)
		}
	}, [rangeRef.current, imgRef.current])

	const percentage =
		(current_level! - current_min_level!) /
		(current_max_level! - current_min_level!)

	const value = percentage * (rangeWidth - imgWidth) + 'px'

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
					<span>{priceT}</span>
					<img src={price} alt='' />
					<span>{current_price}</span>
				</div>
				<div>
					<span>{employeesT}</span>
					<img src={employeesImg} alt='' />
					<span>{employees}/3</span>
				</div>
				<div>
					<span>{processingT}</span>
					<img src={time} alt='' />
					<span>{processing}с</span>
				</div>
			</div>
			<div ref={rangeRef} className={styles.range}>
				<img ref={imgRef} style={{ left: value }} src={cursorLvl} alt='' />
			</div>
			<div>
				<span>{current_min_level}</span>
				<span>{current_max_level}</span>
			</div>
		</div>
	)
}

export default StatisticsDepartment
