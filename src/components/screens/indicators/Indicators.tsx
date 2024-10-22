import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

import HeadingManagement from '@/components/shared/heading-management/HeadingManagement'
import Title from '@/components/shared/title/Title'

import indicatorsImg from '@/assets/images/indicators.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Indicators.module.scss'
import IndicatorItem from './indicator-item/IndicatorItem'
import { DepartmentService } from '@/services/department.service'

const Indicators: FC = () => {
	const { title, indicators, description } = useCustomTranslation('indicators')
	const { data, isLoading } = useQuery({
		queryKey: ['indicators'],
		queryFn: () => DepartmentService.getIndicators()
	})

	return (
		<div className={styles.indicators}>
			<Title className='flex m-2 justify-center'>{title}</Title>
			<HeadingManagement isIndicators text={indicators} />
			<div>
				<img src={indicatorsImg} alt='' />
				<div>
					<strong>{indicators}</strong>
					<p>{description}</p>
				</div>
			</div>
			<div>
				{!isLoading && data
					? data.map(i => (
							<IndicatorItem
								key={i.name}
								profit={i.profit}
								current_price={i.current_price}
								current_level_name={i.current_level_name}
								name={i.name}
								current_level={i.current_level}
							/>
						))
					: ''}
			</div>
		</div>
	)
}

export default Indicators
