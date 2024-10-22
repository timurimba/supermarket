import { type FC, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import bg from '@/assets/images/bg-tycon.jpg'
import cashiers from '@/assets/images/cashiers-link.svg'
import chart from '@/assets/images/chart.svg'
import human from '@/assets/images/human.svg'
import management from '@/assets/images/management-link.svg'
import plus from '@/assets/images/plus.svg'
import settings from '@/assets/images/settings.svg'
import shop from '@/assets/images/shop-link.svg'
import tasksTop from '@/assets/images/tasks-link-top.svg'
import tasks from '@/assets/images/tasks-link.svg'

import styles from './Home.module.scss'
import Circle from './circle/Circle'
import Dollar from './dollar/Dollar'

const Home: FC = () => {
	const [isAnimateDollar, setIsAnimateDollar] = useState(false)
	const positionRef = useRef({ top: 93, left: 56 })

	const imageRef = useRef<HTMLImageElement | null>(null)
	const lastTouchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

	const handleTouchMove = (e: any) => {
		if (e.touches.length === 1) {
			const touch = e.touches[0]
			const deltaX = touch.clientX - lastTouchRef.current.x
			const deltaY = touch.clientY - lastTouchRef.current.y

			const screenWidth = window.innerWidth
			const screenHeight = window.innerHeight

			let newLeft = positionRef.current.left + deltaX
			if (newLeft < -screenWidth) newLeft = -screenWidth
			if (newLeft > screenWidth) newLeft = screenWidth

			let newTop = positionRef.current.top + deltaY

			const position =
				imageRef.current!.getBoundingClientRect().bottom +
				(newTop - positionRef.current.top)
			if (position < screenHeight) newTop = positionRef.current.top
			if (newTop) if (newTop > screenWidth) newTop = screenWidth

			positionRef.current.left = newLeft
			positionRef.current.top = newTop

			imageRef.current!.style.left = `${positionRef.current.left}px`
			imageRef.current!.style.top = `${positionRef.current.top}px`

			lastTouchRef.current = {
				x: touch.clientX,
				y: touch.clientY
			}
		}
	}

	const handleTouchStart = (e: any) => {
		if (e.touches.length === 1) {
			lastTouchRef.current = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY
			}
		}
	}

	return (
		<div className={styles.home}>
			<div
				ref={imageRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				className='absolute top-[93px] left-[56px] w-full scale-[3]'
			>
				<img src={bg} alt='' />
				{isAnimateDollar ? (
					<Dollar setIsAnimateDollar={setIsAnimateDollar} />
				) : (
					<Circle setIsAnimateDollar={setIsAnimateDollar} />
				)}
			</div>
			<div>
				<Link to={'/special-offer'}>
					<img src={human} alt='' />
					<div>
						<img src={plus} alt='' />
					</div>
				</Link>
				<div>
					<Link to='/indicators'>
						<img src={chart} alt='' />
					</Link>
					<Link to='/tasks'>
						<img src={tasksTop} alt='' />
					</Link>
				</div>
			</div>
			<div>
				<div>
					<Link to='/settings'>
						<img src={settings} alt='' />
					</Link>
				</div>
				<div>
					<Link to='/management'>
						<img src={management} alt='' />
					</Link>
					<Link to='/cashiers'>
						<img src={cashiers} alt='' />
					</Link>
					<Link to='/tasks'>
						<img src={tasks} alt='' />
					</Link>
					<Link to='/store'>
						<img src={shop} alt='' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
