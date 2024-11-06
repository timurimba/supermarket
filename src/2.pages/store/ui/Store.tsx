import type { FC } from 'react'

import styles from './Store.module.scss'
import { BunWidget } from '@/3.widgets'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Store: FC = () => {
	const { title } = useCustomTranslation('store')

	return (
		<div className={styles.store}>
			<Title>
				<span
					dangerouslySetInnerHTML={{
						__html: title.replace(/ /g, '<br />')
					}}
				/>
			</Title>
			<div>
				<BunWidget />
			</div>
		</div>
	)
}

export default AnimatedPage(Store)
