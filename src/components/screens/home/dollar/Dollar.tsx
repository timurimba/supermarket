import cn from 'clsx'
import { type FC, useEffect, useState } from 'react'

import dollar from '@/assets/images/dollar.svg'

import styles from './Dollar.module.scss'

const Dollar: FC<any> = ({ setIsAnimateDollar }) => {
	const [isRemoving, setIsRemoving] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsRemoving(true)

			const removeTimeout = setTimeout(() => {
				setIsAnimateDollar(false)
			}, 500)

			return () => clearTimeout(removeTimeout)
		}, 1000)

		return () => clearTimeout(timeout)
	}, [setIsAnimateDollar])

	return (
		<img
			className={cn(styles.dollar, {
				[styles['fade-out']]: isRemoving
			})}
			src={dollar}
			alt=''
		/>
	)
}

export default Dollar
