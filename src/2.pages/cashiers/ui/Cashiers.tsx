import type { FC } from 'react'

import styles from './Cashiers.module.scss'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Cashiers: FC = () => {
	const { title, soon } = useCustomTranslation('cashiers')
	return (
		<div className={styles.cashiers}>
			<Title>{title}</Title>
			<div>
				<div>{soon}!</div>
			</div>
		</div>
	)
}

export default AnimatedPage(Cashiers)
