import type { FC } from 'react'

import styles from './ChangingLanguage.module.scss'
import { ChangeLanguage } from '@/4.features'
import { useCustomTranslation } from '@/6.shared'

const ChangingLanguage: FC = () => {
	const { language } = useCustomTranslation('settings')
	return (
		<div className={styles.wrapper}>
			<span>{language}:</span>
			<ChangeLanguage />
		</div>
	)
}

export default ChangingLanguage
