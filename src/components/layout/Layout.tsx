import type { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

import { routes } from '@/providers/router/router.data'

import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation()

	const route = routes.find(r => r.path === pathname)!

	return (
		<div
			style={{
				background: `linear-gradient(to bottom, ${route.headerBg} 200px, ${route.mainBg} 200px)`
			}}
			className={styles.layout}
		>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
