import type { FC } from 'react'

import styles from './Settings.module.scss'
import UsefulLink from './useful-link/UsefulLink'
import { ChangingAudio, ChangingLanguage } from '@/3.widgets'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Settings: FC = () => {
	const { title } = useCustomTranslation('settings')
	return (
		<div className={styles.settings}>
			<Title>{title}</Title>
			<div>
				<ChangingLanguage />
				<ChangingAudio />
				<UsefulLink type='our_channel' />
				<UsefulLink type='support' />
			</div>
		</div>
	)
}

export default AnimatedPage(Settings)
