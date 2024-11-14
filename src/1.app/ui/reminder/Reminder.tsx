import { SetStateAction } from 'jotai'
import type { Dispatch, FC } from 'react'

import treasure from '../../assets/images/treasure.svg'
import x from '../../assets/images/x-reminder.svg'

import styles from './Reminder.module.scss'
import { Animated, useCustomTranslation } from '@/6.shared'

const Reminder: FC<{
	setIsCloseReminder: Dispatch<SetStateAction<boolean>>
}> = ({ setIsCloseReminder }) => {
	const { info, achievements } = useCustomTranslation('about')

	return (
		<div className={styles.reminder}>
			<button onClick={() => setIsCloseReminder(true)}>
				<img src={x} alt='' />
			</button>
			<Animated>
				<img src={treasure} alt='' />
				<p>{achievements}</p>
				<p>{info}</p>
			</Animated>
		</div>
	)
}

export default Reminder
