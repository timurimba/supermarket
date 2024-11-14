import type { FC } from 'react'

import { useCustomTranslation } from '@/6.shared'
import styles from './Preloader.module.scss'
import Progress from './progress/Progress'

const Preloader: FC = () => {
	const { info, achievements } = useCustomTranslation('about')

	return (
		<div className={styles.preloader}>
			<Progress />
			<p>{achievements}</p>
			<p>{info}</p>
		</div>
	)
}

export default Preloader
