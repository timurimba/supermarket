import { type FC, useEffect } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../layout/Layout'
import RouterProvider from '../providers/router/RouterProvider'
import SoundProvider from '../providers/sound/SoundProvider'
import TanstackProvider from '../providers/tanstack/TanstackProvider'

const App: FC<any> = ({ handlerAppLoaded }) => {
	useEffect(() => {
		handlerAppLoaded()
	}, [])

	return (
		<>
			<Router>
				<TanstackProvider>
					<SoundProvider>
						<SkeletonTheme baseColor='#fff4' highlightColor='#fff'>
							<Layout>
								{/* <TutorialWidget /> */}
								<RouterProvider />
							</Layout>
						</SkeletonTheme>
					</SoundProvider>
				</TanstackProvider>
			</Router>
		</>
	)
}

export default App
