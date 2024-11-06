import cn from 'clsx'
import type { FC } from 'react'

import styles from './ExecuteTask.module.scss'
import { ITask } from '@/5.entities'
import { useCustomTranslation } from '@/6.shared'

const ExecuteTask: FC<ITask> = ({ link, type }) => {
	const { claim } = useCustomTranslation('tasks')

	const getLink = () => {
		if (type === 'invitation') {
			return `https://t.me/share/url?url=${encodeURIComponent(`Hi, sign-up: ${link}`)}`
		} else {
			return link
		}
	}

	return (
		<a
			href={getLink()}
			target='_blank'
			className={cn(styles.execute, {
				[styles.subscription]: type === 'subscribe_channel',
				[styles.invitation]: type === 'invitation'
			})}
		>
			{claim}
		</a>
	)
}

export default ExecuteTask
