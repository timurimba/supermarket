import { type FC, useEffect, useState } from 'react'

import styles from './Circle.module.scss'

const Circle: FC<any> = ({ setIsAnimateDollar }) => {
	const [progressStartValue, setProgressStartValue] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setProgressStartValue(prev => {
				if (prev === 100) {
					clearInterval(interval)

					return prev
				}
				return prev + 1
			})
		}, 30)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (progressStartValue === 100) {
			setIsAnimateDollar(true)
		}
	}, [progressStartValue])

	return (
		<div
			style={{
				backgroundImage: `conic-gradient(#599939 ${progressStartValue * 3.6}deg, transparent 0deg)`
			}}
			className={styles.circle}
		></div>
	)
}

export default Circle
