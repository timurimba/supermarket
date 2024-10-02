import type { FC, PropsWithChildren } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <Router>{children}</Router>
}

export default Layout
