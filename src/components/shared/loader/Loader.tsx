import cn from 'clsx'
import { LoaderCircle } from 'lucide-react'
import type { FC } from 'react'

import styles from './Loader.module.scss'
import { ILoaderProps } from './loader.types'

const Loader: FC<ILoaderProps> = ({ className }) => {
	return <LoaderCircle className={cn(styles.loader, className)} />
}

export default Loader
