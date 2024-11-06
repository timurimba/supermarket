import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import left from '../../assets/arrow-left.svg'
import right from '../../assets/arrow-right.svg'

import styles from './ChangeLanguage.module.scss'

const ChangeLanguage: FC = () => {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
		localStorage.setItem('language_code', i18n.language)
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={toggleLanguage}>
				<img src={left} alt='' />
			</button>
			<span>{i18n.language === 'ru' ? 'Русский' : 'English'}</span>
			<button onClick={toggleLanguage}>
				<img src={right} alt='' />
			</button>
		</div>
	)
}

export default ChangeLanguage
