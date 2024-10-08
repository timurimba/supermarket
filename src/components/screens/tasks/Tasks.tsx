import type { FC } from 'react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import Task from './task/Task'

const Tasks: FC = () => {
	const { title } = useCustomTranslation('tasks')
	return (
		<div>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div className='flex flex-col gap-y-4 mt-3'>
				<Task name='subscribe_channel' />
				<Task name='invitation' />
			</div>
		</div>
	)
}

export default Tasks
