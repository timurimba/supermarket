import { AnimatePresence } from 'framer-motion'
import { type FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { routes } from './router.data'

const RouterProvider: FC = () => {
	const location = useLocation()
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</AnimatePresence>
	)
}

export default RouterProvider
