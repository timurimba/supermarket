import { useMutation, useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from '@/components/shared/loader/Loader'

import { queryClient } from '@/providers/tanstack-query/TanstackQuery'

import bd from '@/assets/images/bakery-depart.svg'
import cd from '@/assets/images/cd.svg'
import dollar from '@/assets/images/dollar.svg'
import sd from '@/assets/images/fish-depart.svg'
import md from '@/assets/images/meat-depart.svg'
import pd from '@/assets/images/parfume-depart.svg'
import fd from '@/assets/images/vegetable-depart.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './ManagementDepartment.module.scss'
import { formatPrice } from './management-department.utils'
import { DepartmentService } from '@/services/department.service'
import { UserService } from '@/services/user.service'
import {
	EnumDepartmentName,
	IDepartmentManagement
} from '@/types/department.types'

const ManagementDepartment: FC<IDepartmentManagement> = ({ name, info }) => {
	const navigate = useNavigate()
	const [isBought, setIsBought] = useState(info.exists)
	const { title } = useCustomTranslation(name)
	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['buy-department'],
		mutationFn: (name: EnumDepartmentName) => DepartmentService.buy(name),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
			setIsBought(true)
		}
	})

	const returnImg = () => {
		switch (name) {
			case EnumDepartmentName.BAKERY:
				return bd
			case EnumDepartmentName.CLOTHING:
				return cd
			case EnumDepartmentName.FRUITS:
				return fd
			case EnumDepartmentName.MEAT:
				return md
			case EnumDepartmentName.PERFUMERY:
				return pd
			case EnumDepartmentName.SEAFOOD:
				return sd
		}
	}

	const buy = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		mutate(name)
	}

	const navigateToDepartment = () => {
		if (isBought) {
			navigate(`/${name}`)
		}
	}

	return (
		<div
			onClick={navigateToDepartment}
			className={cn(styles.wrapper, {
				'cursor-not-allowed': !info.exists
			})}
		>
			<img src={returnImg()} alt='' />
			<span>{title}</span>

			<button
				disabled={user!.profit < info.price || isBought || isPending}
				className={cn({
					'!bg-gray-400': user!.profit < info.price
				})}
				onClick={buy}
			>
				{isPending ? (
					<Loader />
				) : (
					<span>
						{isBought ? (
							<Check size={40} className='text-white font-bold !mt-0 mx-auto' />
						) : (
							<>
								<img src={dollar} alt='' />
								{formatPrice(info.price)}
							</>
						)}
					</span>
				)}
			</button>
		</div>
	)
}

export default ManagementDepartment
