import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import DepartmentsManagementBanner from '../departments-management-banner/DepartmentsManagementBanner'

import DepartmentBuy from '@/4.features/department/ui/department-buy/DepartmentBuy'
import { DepartmentBuilding, DepartmentService } from '@/5.entities'
import Animated from '@/6.shared/ui/animated/Animated'

const DepartmentsBuilding: FC = () => {
	const { data: departments, isLoading } = useQuery({
		queryKey: ['departments'],
		queryFn: () => DepartmentService.getAll()
	})

	return (
		<div>
			<Animated>
				<DepartmentsManagementBanner type='building' />
			</Animated>
			{!isLoading && departments?.length ? (
				departments.map(d => (
					<DepartmentBuilding key={d.name} name={d.name}>
						<DepartmentBuy
							name={d.name}
							price={d.info.price}
							exists={d.info.exists}
						/>
					</DepartmentBuilding>
				))
			) : (
				<Skeleton className='mt-4 !rounded-lg' height={75} count={6} />
			)}
		</div>
	)
}

export default DepartmentsBuilding
