import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import { IAnimatedProps } from './animated.types'

const Animated: FC<PropsWithChildren<IAnimatedProps>> = ({
	className,
	children
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}

export default Animated
