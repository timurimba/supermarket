import type { FC } from 'react'

import Layout from './components/layout/Layout'
import RouterProvider from './providers/router/RouterProvider'

const App: FC = () => {
	return (
		<Layout>
			<RouterProvider />
		</Layout>
	)
}

export default App
