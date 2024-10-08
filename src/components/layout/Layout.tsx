import { type FC, type PropsWithChildren, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { routes } from '@/providers/router/router.data'

import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation()

	// const { user } = useUser()
	const route = routes.find(r => r.path === pathname)!

	const { i18n } = useTranslation()
	useEffect(() => {
		const languageCodeFromLs = localStorage.getItem('language_code')
		if (languageCodeFromLs) {
			i18n.changeLanguage(languageCodeFromLs)
		} else {
			const languageCode = 'ru'
			// user?.language_code

			if (languageCode === 'ru') i18n.changeLanguage(languageCode)
		}
	}, [])

	return (
		<div
			style={{
				background: `linear-gradient(to bottom, ${route.headerBg} 250px, ${route.mainBg} 250px)`
			}}
			className={styles.layout}
		>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
