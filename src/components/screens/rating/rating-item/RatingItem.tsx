import { forwardRef } from 'react'

import styles from './RatingItem.module.scss'
import { IRatingItemProps } from './rating-item.types'

const RatingItem = forwardRef<HTMLTableRowElement, IRatingItemProps>(
	({ img, tg_login, profit }, ref) => {
		return (
			<tr className={styles.wrapper} ref={ref}>
				<td>
					<img src={img} alt='' />
				</td>
				<td>{tg_login}</td>
				<td>{profit}</td>
			</tr>
		)
	}
)

export default RatingItem
