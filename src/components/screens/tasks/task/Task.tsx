import cn from 'clsx'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import dollar from '@/assets/images/dollar.svg'
import human from '@/assets/images/human.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Task.module.scss'
import { ITask } from '@/types/task.types'

const Task: FC<ITask> = ({ name }) => {
	const { subscribe, invite, get, reward } = useCustomTranslation('tasks')
	return (
		<div className={styles.task}>
			<strong>{name === 'subscribe_channel' ? subscribe : invite}</strong>
			<div>
				<span>{reward}:</span>
				<span
					className={
						name === 'invitation' ? 'text-[#384868]' : 'text-[#599939]'
					}
				>
					1000
				</span>
				<img src={name === 'subscribe_channel' ? dollar : human} alt='' />
			</div>
			<Link
				className={cn(styles.link, {
					'bg-[#599939]': name === 'subscribe_channel',
					'bg-[#384868]': name === 'invitation'
				})}
				to={'#'}
			>
				{get}
			</Link>
		</div>
	)
}

export default Task
