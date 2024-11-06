import { motion } from 'framer-motion'
import { FC } from 'react'

export const AnimatedPage = (Page: FC) => {
	const AnimatedComponent: FC = () => {
		return (
			<motion.div
				className='flex flex-col flex-1'
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.9, y: -20, filter: 'blur(8px)' }}
				transition={{ duration: 0.5 }}
			>
				<Page />
			</motion.div>
		)
	}

	return AnimatedComponent
}