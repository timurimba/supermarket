import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'
import type { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/layout/Layout'
import RouterProvider from './providers/router/RouterProvider'

const App: FC = () => {
	return (
		<WebAppProvider>
			<Router>
				<Layout>
					<RouterProvider />
				</Layout>
			</Router>
		</WebAppProvider>
	)
}

export default App
