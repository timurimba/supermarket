import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import DepartmentsManagementBanner from '../departments-management-banner/DepartmentsManagementBanner'

import { DepartmentService, DepartmentStats } from '@/5.entities'
import Animated from '@/6.shared/ui/animated/Animated'

const DepartmentsStats: FC = () => {
	const { data: departments, isLoading } = useQuery({
		queryKey: ['stats'],
		queryFn: () => DepartmentService.getStats()
	})

	return (
		<div>
			<Animated>
				<DepartmentsManagementBanner type='stats' />
			</Animated>
			{!isLoading && departments?.length ? (
				departments.map(d => (
					<DepartmentStats
						key={d.name}
						name={d.name}
						current_level={d.current_level}
						current_level_name={d.current_level_name}
						current_price={d.current_price}
						profit={d.profit}
					/>
				))
			) : (
				<Skeleton className='mt-4 !rounded-lg' height={106} count={4} />
			)}
		</div>
	)
}

export default DepartmentsStats