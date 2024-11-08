import type { FC } from 'react'
import { TouchEvent, useRef } from 'react'
import { Link } from 'react-router-dom'

import bg from '../assets/images/bg-tycon.jpg'
import cashiers from '../assets/images/cashiers.svg'
import manager from '../assets/images/manager-home.svg'
import management from '../assets/images/mangement.svg'
import settings from '../assets/images/settings.svg'
import shop from '../assets/images/store-home.svg'
import tasks from '../assets/images/tasks.svg'
import x from '../assets/images/x.svg'

import styles from './Home.module.scss'
import { AnimatedPage } from '@/6.shared'
import char from '@/6.shared/assets/images/char.svg'
import cup from '@/6.shared/assets/images/cup-1.svg'

const Home: FC = () => {
	const positionRef = useRef({ top: 93, left: 56 })

	const imageRef = useRef<HTMLImageElement | null>(null)
	const lastTouchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		if (e.touches.length === 1) {
			const touch = e.touches[0]
			const deltaX = touch.clientX - lastTouchRef.current.x
			const deltaY = touch.clientY - lastTouchRef.current.y

			const rect = imageRef.current!.getBoundingClientRect()

			const screenWidth = window.innerWidth
			const screenHeight = window.innerHeight

			const newLeftPositionWithDeltaX = positionRef.current.left + deltaX
			const newTopPositionWithDeltaY = positionRef.current.top + deltaY

			const getValueNewLeft = () => {
				if (newLeftPositionWithDeltaX < -screenWidth) {
					return -screenWidth
				}
				if (newLeftPositionWithDeltaX > screenWidth) {
					return screenWidth
				}
				return newLeftPositionWithDeltaX
			}

			const getValueNewTop = () => {
				if (
					rect.bottom +
						positionRef.current.top +
						deltaY -
						positionRef.current.top <=
						screenHeight ||
					rect.top + deltaY >= 0
				)
					return positionRef.current.top

				return newTopPositionWithDeltaY
			}

			const newLeft = getValueNewLeft()
			const newTop = getValueNewTop()

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

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
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
				<img src={bg} />
				{/* <Animation /> */}
			</div>
			<div>
				<div>
					<Link to='/rating'>
						<img className='w-[26px] h-[26px]' src={cup} alt='' />
					</Link>
					<Link to='/special-offer'>
						<img src={manager} alt='' />
						<div>
							<img src={x} alt='' />
						</div>
					</Link>
				</div>
				<div>
					<Link to='/management?type=stats'>
						<img src={char} alt='' />
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

export default AnimatedPage(Home)
