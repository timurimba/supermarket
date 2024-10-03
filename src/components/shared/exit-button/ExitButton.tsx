import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import x from '@/assets/images/x.svg'

import styles from './ExitButton.module.scss'
import { IExitButtonProps } from './ExitButton.type'
const ExitButton: FC<IExitButtonProps> = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1)
	}
	return (
		<button className={styles.wrapper} onClick={handleGoBack}>
			<img src={x} alt='' />
		</button>
	)
}

export default ExitButton
