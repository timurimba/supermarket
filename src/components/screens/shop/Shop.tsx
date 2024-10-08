import type { FC } from 'react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Shop.module.scss'

const Shop: FC = () => {
	const { title } = useCustomTranslation('shop')
	return (
		<div className={styles.shop}>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div>
				<h1></h1>
				<div></div>
			</div>
		</div>
	)
}

export default Shop
