import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import styles from './Title.module.scss'
import { ITitleProps } from './title.types'

const Title: FC<PropsWithChildren<ITitleProps>> = ({ className, children }) => {
	return <h1 className={cn(styles.title, className)}>{children}</h1>
}

export default Title
