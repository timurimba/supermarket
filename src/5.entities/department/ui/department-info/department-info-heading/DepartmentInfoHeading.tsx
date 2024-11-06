import type { FC } from 'react'

import styles from './DepartmentInfoHeading.module.scss'
import { IDepartmentInfoHeadingProps } from './department-info-heading.types'
import { getImgDepartment, useCustomTranslation } from '@/6.shared'

const DepartmentInfoHeading: FC<IDepartmentInfoHeadingProps> = ({
	current_level_name,
	name
}) => {
	const { title, description } = useCustomTranslation(
		`${name}.${current_level_name}`
	)

	return (
		<div className={styles.heading}>
			<img src={getImgDepartment(current_level_name)} alt='' />
			<div>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default DepartmentInfoHeading
