import type { FC } from 'react'

import styles from './ChangingAudio.module.scss'
import { ChangeAudio } from '@/4.features'
import { useCustomTranslation } from '@/6.shared'

const ChangingAudio: FC = () => {
	const { settingsAudio } = useCustomTranslation('settings')
	return (
		<div className={styles.wrapper}>
			<h1>{settingsAudio}</h1>
			<div>
				<ChangeAudio type='music' />
				<ChangeAudio type='sound' />
			</div>
		</div>
	)
}

export default ChangingAudio
