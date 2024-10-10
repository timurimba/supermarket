import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'
import { Link } from 'react-router-dom'

import ExitButton from '@/components/shared/exit-button/ExitButton'
import Title from '@/components/shared/title/Title'

import chart from '@/assets/images/chart.svg'
import aboutImg from '@/assets/images/control-about.svg'
import hammer from '@/assets/images/hammer.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Management.module.scss'
import ManagementDepartment from './management-department/ManagementDepartment'
import { DepartmentService } from '@/services/department.service'

const Management: FC = () => {
	const { title, structure, about } = useCustomTranslation('management')

	const { data } = useQuery({
		queryKey: ['departments'],
		queryFn: () => DepartmentService.getAll()
	})

	return (
		<div className={styles.management}>
			<Title className='flex m-2 justify-center'>{title}</Title>
			<div className={styles.heading}>
				<div>
					<img src={hammer} alt='' />
					<span>{structure}</span>
				</div>
				<Link to={'/indicators'}>
					<img src={chart} alt='' />
				</Link>
				<ExitButton />
			</div>
			<div className={styles.about}>
				<img src={aboutImg} alt='' />
				<div>
					<strong>{structure}</strong>
					<p>{about}</p>
				</div>
			</div>
			<div className={styles.departments}>
				{data
					? data.map(d => (
							<ManagementDepartment key={d.name} info={d.info} name={d.name} />
						))
					: ''}
			</div>
		</div>
	)
}

export default Management
