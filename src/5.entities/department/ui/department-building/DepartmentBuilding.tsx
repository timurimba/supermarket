import type { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import bakeryPost from '../../assets/images/bakery-poster.svg'
import clothingPost from '../../assets/images/clothing-poster.svg'
import fruitsPost from '../../assets/images/fruits-poster.svg'
import meatPost from '../../assets/images/meat-poster.svg'
import perfumeryPost from '../../assets/images/perfumery-poster.svg'
import seafoodPost from '../../assets/images/seafood-poster.svg'
import {
	EnumDepartmentName,
	IDepartmentManagement
} from '../../model/department.types'

import styles from './DepartmentBuilding.module.scss'
import { Animated, useCustomTranslation } from '@/6.shared'

const DepartmentBuilding: FC<PropsWithChildren<IDepartmentManagement>> = ({
	name,
	info,
	children
}) => {
	const { title } = useCustomTranslation(name)
	const navigate = useNavigate()

	const returnImg = () => {
		switch (name) {
			case EnumDepartmentName.BAKERY:
				return bakeryPost
			case EnumDepartmentName.CLOTHING:
				return clothingPost
			case EnumDepartmentName.FRUITS:
				return fruitsPost
			case EnumDepartmentName.MEAT:
				return meatPost
			case EnumDepartmentName.PERFUMERY:
				return perfumeryPost
			case EnumDepartmentName.SEAFOOD:
				return seafoodPost
		}
	}

	const navigateToDepartment = () => {
		if (info.exists) {
			navigate(`/department/${name}`)
		}
	}

	return (
		<Animated>
			<div onClick={navigateToDepartment} className={styles.wrapper}>
				<img src={returnImg()} alt='' />
				<span>{title}</span>
				{children}
			</div>
		</Animated>
	)
}

export default DepartmentBuilding
