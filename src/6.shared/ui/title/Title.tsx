import type { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Title.module.scss'
import x from './assets/x.svg'

const Title: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate()

	return (
		<div className={styles.title}>
			<h1>{children}</h1>
			<button onClick={() => navigate(-1)}>
				<img src={x} alt='' />
			</button>
		</div>
	)
}

export default Title
