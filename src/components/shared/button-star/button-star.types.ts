import { ButtonHTMLAttributes } from 'react'

export interface IButtonStarProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	isHire?: boolean
	className?: string
	buy: () => void
}
