import { useQuery } from '@tanstack/react-query'
import { type FC, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'

import DepartmentImprove from '@/4.features/department/ui/department-improve/DepartmentImprove'
import { DepartmentInfo, DepartmentService } from '@/5.entities'
import DepartmentImprovement from '@/5.entities/department/ui/department-improvement/DepartmentImprovement'
import { Animated } from '@/6.shared'

const DepartmentBusiness: FC = () => {
	const { pathname } = useLocation()
	const departmentName = pathname.split('/')[2]

	const { data: department, isLoading } = useQuery({
		queryKey: ['department', departmentName],
		queryFn: () => DepartmentService.get(departmentName)
	})

	const {
		data: employeePrice,
		refetch,
		isLoading: isLoadingEmployee
	} = useQuery({
		queryKey: ['employee', departmentName],
		queryFn: () => DepartmentService.getNextEmployeePrice(departmentName),
		enabled: false
	})

	useEffect(() => {
		if (department && department.employees < 3) {
			refetch()
		}
	}, [department])

	const { data: levelPrice, isLoading: isLoadingLevelPrice } = useQuery({
		queryKey: ['level', departmentName],
		queryFn: () => DepartmentService.getNextLevelPrice(departmentName)
	})

	return (
		<div>
			{department && !isLoading ? (
				<Animated>
					<DepartmentInfo name={departmentName} department={department} />
				</Animated>
			) : (
				<Skeleton className='max-w-full w-full' height={297} />
			)}
			<DepartmentImprovement improvement='level'>
				{levelPrice && !isLoadingLevelPrice ? (
					<Animated>
						<DepartmentImprove
							improvement='level'
							price={levelPrice}
							name={departmentName}
						/>
					</Animated>
				) : (
					<Animated>
						<Skeleton
							baseColor='#B8D1A8'
							width={90}
							height={52}
							className='!rounded-md'
						/>
					</Animated>
				)}
			</DepartmentImprovement>
			<DepartmentImprovement improvement='employee'>
				<Animated>
					{department && department.employees === department.max_employees ? (
						<DepartmentImprove isCompleted />
					) : employeePrice && !isLoadingEmployee ? (
						<DepartmentImprove
							improvement='employee'
							price={employeePrice}
							name={departmentName}
						/>
					) : (
						<Skeleton
							baseColor='#B8D1A8'
							width={90}
							height={52}
							className='!rounded-md'
						/>
					)}
				</Animated>
			</DepartmentImprovement>
		</div>
	)
}

export default DepartmentBusiness
