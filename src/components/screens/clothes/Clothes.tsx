import type { FC } from 'react'

import ImprovementDepartment from '@/components/shared/improvement-department/ImprovementDepartment'
import StatisticsDepartment from '@/components/shared/statistics-department/StatisticsDepartment'
import Title from '@/components/shared/title/Title'

import clothing1 from '@/assets/images/clothing-1.svg'
import clothing2 from '@/assets/images/clothing-2.svg'
import clothing3 from '@/assets/images/clothing-3.svg'
import clothing4 from '@/assets/images/clothing-4.svg'

import { useDepartment } from '@/hooks/useDepartment'

import { EnumDepartmentName } from '@/types/department.types'

const Clothes: FC = () => {
	const {
		data,
		title,
		titleLvl,
		descriptionLvl,
		priceEmployee,
		priceNextLevel,
		mutateBuyEmployees,
		mutateImproveLevel,
		improve_title
	} = useDepartment(EnumDepartmentName.CLOTHING)

	const getImg = () => {
		switch (data?.current_min_level) {
			case 1:
				return clothing1
			case 25:
				return clothing2
			case 50:
				return clothing3
			case 75:
				return clothing4
		}
	}

	return (
		<div>
			<Title className='flex m-2 justify-center'>{title}</Title>
			<StatisticsDepartment
				employees={data?.employees}
				current_price={data?.current_price}
				processing={data?.processing}
				current_level={data?.current_level}
				img={getImg()}
				title={titleLvl}
				description={descriptionLvl}
				current_max_level={data?.current_max_level}
				current_min_level={data?.current_min_level}
			/>
			<ImprovementDepartment
				price={priceNextLevel}
				improve={mutateImproveLevel}
				title={improve_title}
				type='base'
			/>
			<ImprovementDepartment
				price={priceEmployee}
				improve={mutateBuyEmployees}
				isCompleted={data?.employees === 3}
				type='employee'
			/>
		</div>
	)
}

export default Clothes
