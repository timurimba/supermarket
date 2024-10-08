import type { FC, PropsWithChildren } from 'react'

import ExitButton from '../exit-button/ExitButton'
import Title from '../title/Title'

import styles from './HeadingWithExit.module.scss'

const HeadingWithExit: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Title>{children}</Title>
			<ExitButton />
		</div>
	)
}

export default HeadingWithExit
