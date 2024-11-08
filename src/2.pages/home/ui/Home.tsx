import type { FC } from 'react'

import bg from '../assets/images/bg-tycon.jpg'
import { useHome } from '../lib/hooks/useHome'

import styles from './Home.module.scss'
import BottomNavigation from './bottom-navigation/BottomNavigation'
import TopNavigation from './top-navigation/TopNavigation'
import { AnimatedPage } from '@/6.shared'

const Home: FC = () => {
	const { imageRef, handleTouchStart, handleTouchMove } = useHome()

	return (
		<div className={styles.home}>
			<div
				ref={imageRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				className='absolute top-[93px] left-[56px] w-full scale-[3]'
			>
				<img src={bg} />
			</div>
			<TopNavigation />
			<BottomNavigation />
		</div>
	)
}

export default AnimatedPage(Home)
