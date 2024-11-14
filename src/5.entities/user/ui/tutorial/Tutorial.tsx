import type { FC } from 'react'
import { createPortal } from 'react-dom'

import coach from '../../assets/coach.svg'

import styles from './Tutorial.module.scss'
import { ITutorialProps } from './tutorial.types'
import { useCustomTranslation } from '@/6.shared'

const Tutorial: FC<ITutorialProps> = ({ step, isReverse = false }) => {
	const { tap } = useCustomTranslation('tutorial')
	const { text } = useCustomTranslation(`tutorial.${step}`)

	return createPortal(
		<div className={styles.tutorial}>
			<div>
				<p>{text}</p>
				{step <= 5 && <span>{tap}</span>}
			</div>
			<div className='w-[102px] flex-shrink-0'></div>
			<img src={coach} alt='' />
		</div>,
		document.body
	)
}

export default Tutorial
