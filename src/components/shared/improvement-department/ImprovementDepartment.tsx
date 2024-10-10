import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { Check } from 'lucide-react'
import type { FC } from 'react'

import dollar from '@/assets/images/dollar.svg'
import base from '@/assets/images/improve-arrow.svg'
import employee from '@/assets/images/improve-employee.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './ImprovementDepartment.module.scss'
import { IImprovementDepartmentProps } from './improvement-department.types'
import { UserService } from '@/services/user.service'

const ImprovementDepartment: FC<IImprovementDepartmentProps> = ({
	improve,
	type,
	price,
	title,
	isCompleted
}) => {
	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})
	const { hire, upgrade } = useCustomTranslation('improvement')

	return (
		<div className={styles.wrapper}>
			<div>
				<img src={type === 'base' ? base : employee} alt='' />
				<div>
					<strong>{type === 'employee' ? 'НАНЯТЬ СОТРУДНИКОВ' : title}</strong>
					<p>
						{type === 'employee'
							? 'Увеличивает количество сотрудников на 1'
							: 'Увеличивает прибыль'}
					</p>
				</div>
			</div>
			<button
				disabled={user?.profit! < price! || isCompleted}
				className={cn(styles.button, {
					'!bg-gray-400': user?.profit! < price!
				})}
				onClick={improve}
			>
				{!isCompleted ? (
					<>
						<span className={`${type === 'base' ? 'lowercase' : 'uppercase'}`}>
							{type === 'base' ? upgrade : hire}
						</span>
						<div>
							<span>{price}</span>
							<img src={dollar} alt='' />
						</div>
					</>
				) : (
					<Check size={40} className='text-white w-full' />
				)}
			</button>
		</div>
	)
}

export default ImprovementDepartment
