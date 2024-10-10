import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'
import type { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/layout/Layout'
import RouterProvider from './providers/router/RouterProvider'
import TanstackQuery from './providers/tanstack-query/TanstackQuery'

const App: FC = () => {
	return (
		<WebAppProvider>
			<Router>
				<TanstackQuery>
					<Layout>
						<Toaster />
						<RouterProvider />
					</Layout>
				</TanstackQuery>
			</Router>
		</WebAppProvider>
	)
}

export default App
