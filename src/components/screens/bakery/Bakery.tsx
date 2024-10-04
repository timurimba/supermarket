import type { FC } from 'react'

import StatisticsDepartment from '@/components/shared/statistics-department/StatisticsDepartment'
import Title from '@/components/shared/title/Title'

import bakeryOne from '@/assets/images/bakery-1.svg'

const Bakery: FC = () => {
	return (
		<div>
			<div className='flex mt-1 justify-center'>
				<Title>ПЕКАРНЯ</Title>
			</div>
			<StatisticsDepartment
				img={bakeryOne}
				title='Туалетная вода'
				description='Этот парфюм состоит из туалетной воды.'
			/>
		</div>
	)
}

export default Bakery
