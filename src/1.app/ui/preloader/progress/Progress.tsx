import type { FC } from 'react'

import cart from '../../../assets/images/preloader-cart.svg'

import styles from './Progress.module.scss'

const Progress: FC = () => {
	return (
		<div className={styles.progress}>
			<div>
				<img src={cart} alt='' />
			</div>
		</div>
	)
}

export default Progress
