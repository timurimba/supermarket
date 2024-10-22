import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import ExitButton from '../exit-button/ExitButton'
import Title from '../title/Title'

import styles from './HeadingWithExit.module.scss'
import { IHeadingWithExitProps } from './heading-with-exit.types'

const HeadingWithExit: FC<PropsWithChildren<IHeadingWithExitProps>> = ({
	children,
	className
}) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<Title>{children}</Title>
			<ExitButton />
		</div>
	)
}

export default HeadingWithExit
