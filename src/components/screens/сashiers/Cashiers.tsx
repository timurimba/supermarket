import type { FC } from 'react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Cashiers.module.scss'

const Cashiers: FC = () => {
	const { title, soon } = useCustomTranslation('cashiers')
	return (
		<div className={styles.cashiers}>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div>
				<span>{soon} !</span>
			</div>
		</div>
	)
}

export default Cashiers
