import { Check } from 'lucide-react'
import type { FC } from 'react'

import styles from './DepartmentImprove.module.scss'
import { TypeDepartmentImproveProps } from './DepartmentImprove.types'
import { useDepartmentImprove } from './useDepartmentImprove'
import { Loader, dollar, formatPrice, useCustomTranslation } from '@/6.shared'

const DepartmentImprove: FC<TypeDepartmentImproveProps> = ({
	improvement,
	name,
	price,
	isCompleted
}) => {
	const { action } = useCustomTranslation(`improvement.${improvement}`)
	const { hire, upgrade, isPending } = useDepartmentImprove(name!)

	const handlerImprove = () => {
		if (improvement === 'level') {
			upgrade()
		} else {
			hire()
		}
	}

	return (
		<button
			onClick={handlerImprove}
			disabled={isPending || isCompleted}
			className={styles.improve}
		>
			{isCompleted ? (
				<div className='flex items-center'>
					<Check className='text-white' />
				</div>
			) : isPending ? (
				<Loader />
			) : (
				<>
					<span>{action}</span>
					<div>
						<span>{formatPrice(price)}</span>
						<img src={dollar} alt='' />
					</div>
				</>
			)}
		</button>
	)
}

export default DepartmentImprove
