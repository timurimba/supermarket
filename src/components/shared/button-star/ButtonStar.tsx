import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import star from '@/assets/images/star.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './ButtonStar.module.scss'
import { IButtonStarProps } from './button-star.types'

const ButtonStar: FC<PropsWithChildren<IButtonStarProps>> = ({
	isHire,
	children,
	className,
	buy,
	disabled
}) => {
	const { hire } = useCustomTranslation('improvement')

	return (
		<button
			disabled={disabled}
			onClick={buy}
			className={cn(styles.wrapper, className)}
		>
			{isHire && !disabled && <strong>{hire}</strong>}
			<div>
				<span>{children}</span>
				{!disabled && <img src={star} alt='' />}
			</div>
		</button>
	)
}

export default ButtonStar
