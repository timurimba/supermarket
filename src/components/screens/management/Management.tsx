import { useQuery } from '@tanstack/react-query'
import { type FC } from 'react'

import HeadingManagement from '@/components/shared/heading-management/HeadingManagement'
import Title from '@/components/shared/title/Title'

import aboutImg from '@/assets/images/control-about.svg'

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
			<HeadingManagement text={structure} />
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
