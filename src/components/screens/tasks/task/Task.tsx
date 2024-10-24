import cn from 'clsx'
import type { FC } from 'react'

import dollar from '@/assets/images/dollar.svg'
import human from '@/assets/images/human.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Task.module.scss'
import { ITask } from '@/types/task.types'

const Task: FC<ITask> = ({ name, link }) => {
	const { subscribe, invite, get, reward, hours } =
		useCustomTranslation('tasks')

	const getLink = () => {
		if (name === 'invitation') {
			return `https://t.me/share/url?url=${encodeURIComponent(`Hi, sign-up: ${link}`)}`
		} else {
			return link
		}
	}

	return (
		<div className={styles.task}>
			<strong>{name === 'subscribe_channel' ? subscribe : invite}</strong>
			<div>
				<span>{reward}:</span>
				<span
					className={
						name === 'subscribe_channel' ? 'text-[#384868]' : 'text-[#599939]'
					}
				>
					{name === 'invitation' ? 1000 : hours}
				</span>
				<img src={name === 'subscribe_channel' ? human : dollar} alt='' />
			</div>
			<a
				className={cn(styles.link, {
					'bg-[#599939]': name === 'invitation',
					'bg-[#384868]': name === 'subscribe_channel'
				})}
				href={getLink()}
				target='_blank'
			>
				{get}
			</a>
		</div>
	)
}

export default Task
