import type { FC, PropsWithChildren } from 'react'

import subscription from '../assets/images/subscription.svg'
import { ITask } from '../model/task.types'

import styles from './Task.module.scss'
import { dollar, useCustomTranslation } from '@/6.shared'

const Task: FC<PropsWithChildren<ITask>> = ({ link, type, children }) => {
	const { reward, hours, invitation, subscribe_channel } =
		useCustomTranslation('tasks')

	return (
		<div className={styles.task}>
			<div>
				<h3>{type === 'invitation' ? invitation : subscribe_channel}</h3>
				{reward}: <span>{type === 'subscribe_channel' ? hours : 1000}</span>{' '}
				{type === 'invitation' ? (
					<img src={dollar} className='w-[38px] inline-block ml-1' alt='' />
				) : (
					<img className='inline-block ml-1' src={subscription} alt='' />
				)}
			</div>
			{children}
		</div>
	)
}

export default Task
