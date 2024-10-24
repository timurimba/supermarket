import { forwardRef } from 'react'

import styles from './RatingItem.module.scss'
import { IRatingItemProps } from './rating-item.types'

const RatingItem = forwardRef<HTMLTableRowElement, IRatingItemProps>(
	({ img, tg_login, coin }, ref) => {
		return (
			<tr className={styles.wrapper} ref={ref}>
				<td>
					<img src={img} alt='' />
				</td>
				<td>{tg_login}</td>
				<td>{coin}</td>
			</tr>
		)
	}
)

export default RatingItem
