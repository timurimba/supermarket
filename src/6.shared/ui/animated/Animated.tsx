import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import { IAnimatedProps } from './animated.types'

const Animated: FC<PropsWithChildren<IAnimatedProps>> = ({
	children,
	className
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export default Animated
