import { useMutation, useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { Check } from 'lucide-react'
import type { FC, MouseEvent } from 'react'

import styles from './DepartmentBuy.module.scss'
import { IDepartmentBuyProps } from './department-buy.types'
import {
	DepartmentService,
	UserService,
	audioSoundAtom,
	isSoundOffAtom
} from '@/5.entities'
import { Loader, dollar, formatPrice, queryClient } from '@/6.shared'

const DepartmentBuy: FC<IDepartmentBuyProps> = ({ price, exists, name }) => {
	const [isSoundOff] = useAtom(isSoundOffAtom)
	const [audioSound] = useAtom(audioSoundAtom)

	const { data: profit } = useQuery({
		queryKey: ['user-profit'],
		queryFn: () => UserService.getInfo(),
		select: data => {
			return data.profit
		}
	})

	const { isPending, mutate: buy } = useMutation({
		mutationKey: ['buy', name],
		mutationFn: () => DepartmentService.buy(name),
		onSuccess: () => {
			if (!isSoundOff) {
				audioSound.play()
			}
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
			queryClient.invalidateQueries({
				queryKey: ['departments']
			})
		}
	})

	const handlerBuy = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		buy()
	}

	return (
		<button
			disabled={exists || isPending || profit! < price}
			onClick={handlerBuy}
			className={cn(styles.buy, {
				[styles['not-money']]: profit! < price && !exists
			})}
		>
			{!isPending ? (
				!exists ? (
					<>
						<img src={dollar} alt='' />
						<span>{formatPrice(price)}</span>
					</>
				) : (
					<Check className='text-white' />
				)
			) : (
				<Loader />
			)}
		</button>
	)
}

export default DepartmentBuy
