import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import Task from './task/Task'
import { TaskService } from '@/services/task.service'

const Tasks: FC = () => {
	const { title } = useCustomTranslation('tasks')

	const { data: subscriptionLink } = useQuery({
		queryKey: ['subscription-link'],
		queryFn: () => TaskService.getTaskSubscription()
	})

	const { data: invitationLink } = useQuery({
		queryKey: ['invitation-link'],
		queryFn: () => TaskService.getTaskInvitation()
	})

	return (
		<div>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div className='flex flex-col gap-y-4 mt-3'>
				<Task link={subscriptionLink!} name='subscribe_channel' />
				<Task link={invitationLink!} name='invitation' />
			</div>
		</div>
	)
}

export default Tasks
