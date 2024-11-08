import { TouchEvent, useRef } from 'react'

export const useHome = () => {
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

	return { handleTouchMove, handleTouchStart, imageRef }
}
