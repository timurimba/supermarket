import type { FC } from 'react'

import styles from './Rating.module.scss'
import { UsersRating } from '@/3.widgets'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Rating: FC = () => {
	const { title } = useCustomTranslation('rating')
	return (
		<div className={styles.rating}>
			<Title>{title}</Title>
			<div>
				<UsersRating />
			</div>
		</div>
	)
}

export default AnimatedPage(Rating)
