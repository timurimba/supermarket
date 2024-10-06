import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import dollar from '@/assets/images/dollar.svg'

import styles from './ControlDepartment.module.scss'
import { IControlDepartmentProps } from './control-department.types'

const ControlDepartment: FC<IControlDepartmentProps> = ({
	title,
	img,
	cash,
	expand,
	path
}) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(path)} className={styles.wrapper}>
			<img src={img} alt='' />
			<span>{title}</span>
			<button
				onClick={e => {
					e.stopPropagation()
					expand()
				}}
			>
				<img src={dollar} alt='' />
				<span>{cash}</span>
			</button>
		</div>
	)
}

export default ControlDepartment
