import type { FC } from 'react'
import { Link } from 'react-router-dom'

import chart from '@/assets/images/chart.svg'
import hammer from '@/assets/images/hammer.svg'

import ExitButton from '../exit-button/ExitButton'

import styles from './HeadingManagement.module.scss'
import { IHeadingManagement } from './heading-management.types'

const HeadingManagement: FC<IHeadingManagement> = ({ isIndicators, text }) => {
	return (
		<div className={styles.heading}>
			<Link to={'/management'}>
				<img src={hammer} alt='' />
				{!isIndicators && <span>{text}</span>}
			</Link>
			<Link to={'/indicators'}>
				<img src={chart} alt='' />
				{isIndicators && <span>{text}</span>}
			</Link>
			<ExitButton />
		</div>
	)
}

export default HeadingManagement
