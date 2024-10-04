import type { FC } from 'react'

import ImprovementDepartment from '@/components/shared/improvement-department/ImprovementDepartment'
import StatisticsDepartment from '@/components/shared/statistics-department/StatisticsDepartment'
import Title from '@/components/shared/title/Title'

import parfumeOne from '@/assets/images/parfume-1.svg'

import styles from './Perfumery.module.scss'

const Perfumery: FC = () => {
	return (
		<div className={styles.perfumery}>
			<div className='flex mt-1 justify-center'>
				<Title>ПАРФЮМЕРИЯ</Title>
			</div>
			<StatisticsDepartment
				img={parfumeOne}
				title='Туалетная вода'
				description='Этот парфюм состоит из туалетной воды.'
			/>
			<div className='mt-6 flex flex-col gap-y-5'>
				<ImprovementDepartment
					title='УЛУЧШЕНИЕ ПАРФЮМЕРИИ'
					improve={() => null}
					type='base'
				/>
				<ImprovementDepartment improve={() => null} type='employee' />
			</div>
		</div>
	)
}

export default Perfumery
