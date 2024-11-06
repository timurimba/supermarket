import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './Tasks.module.scss'
import { ExecuteTask } from '@/4.features'
import { Task, TaskService } from '@/5.entities'
import { Animated, AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Tasks: FC = () => {
	const { title } = useCustomTranslation('tasks')
	const {
		data: invitationLink,
		isSuccess: isSuccessInvitationLink,
		isLoading: isLoadingInvitationLink
	} = useQuery({
		queryKey: ['invitation'],
		queryFn: () => TaskService.getTaskInvitation()
	})
	const {
		data: subscriptionLink,
		isSuccess: isSuccessSubcriptionLink,
		isLoading: isLoadingSubscriptionLink
	} = useQuery({
		queryKey: ['subscription'],
		queryFn: () => TaskService.getTaskSubscription()
	})

	return (
		<div className={styles.tasks}>
			<Title>{title}</Title>
			<div>
				{isSuccessInvitationLink && !isLoadingInvitationLink ? (
					invitationLink && (
						<Animated>
							<Task link={invitationLink} type='invitation'>
								<ExecuteTask link={invitationLink} type='invitation' />
							</Task>
						</Animated>
					)
				) : (
					<Skeleton className='min-h-[76px] !rounded-lg' />
				)}
				{isSuccessSubcriptionLink && !isLoadingSubscriptionLink ? (
					subscriptionLink && (
						<Animated>
							<Task link={''} type='subscribe_channel'>
								<ExecuteTask link={subscriptionLink} type='subscribe_channel' />
							</Task>
						</Animated>
					)
				) : (
					<Skeleton className='min-h-[76px] !rounded-lg' />
				)}
			</div>
		</div>
	)
}

export default AnimatedPage(Tasks)
