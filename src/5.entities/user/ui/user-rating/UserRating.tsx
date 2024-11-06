import { initDataUser } from '@telegram-apps/sdk'
import cn from 'clsx'
import { forwardRef } from 'react'

import cup2 from '../../assets/images/cup-2.svg'
import cup3 from '../../assets/images/cup-3.svg'

import styles from './UserRating.module.scss'
import { IUserRatingProps } from './user-rating.types'
import { coin as coinLogo, cup1 } from '@/6.shared'

const UserRating = forwardRef<HTMLDivElement, IUserRatingProps>(
	({ index, coin, tg_login }, ref) => {
		const getRank = () => {
			switch (index) {
				case 1:
					return <img src={cup1} alt='' />
				case 2:
					return <img src={cup2} alt='' />
				case 3:
					return <img src={cup3} alt='' />
				default:
					return <strong>{index}</strong>
			}
		}

		return (
			<div
				ref={ref}
				className={cn(styles.rating, {
					[styles.me]: tg_login === initDataUser.name
				})}
			>
				{getRank()}
				<span
					className={cn({
						'!font-bold': index === 1 || 2 || 3
					})}
				>
					{tg_login}
				</span>
				<div>
					<img src={coinLogo} alt='' />
					<span>{coin}</span>
				</div>
			</div>
		)
	}
)

export default UserRating
