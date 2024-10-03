import type { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/layout/Layout'
import RouterProvider from './providers/router/RouterProvider'

const App: FC = () => {
	return (
		<Router>
			<Layout>
				<RouterProvider />
			</Layout>
		</Router>
	)
}

export default App
