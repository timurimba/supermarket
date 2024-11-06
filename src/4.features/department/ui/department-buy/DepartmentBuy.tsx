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
import { Loader, dollar, formatPrice } from '@/6.shared'

const DepartmentBuy: FC<IDepartmentBuyProps> = ({ price, exists, name }) => {
	const [isSoundOff] = useAtom(isSoundOffAtom)
	const [audioSound] = useAtom(audioSoundAtom)
	const { data: user } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})
	const { isPending, mutate: buy } = useMutation({
		mutationKey: ['buy', name],
		mutationFn: () => DepartmentService.buy(name),
		onSuccess: () => {
			if (!isSoundOff) {
				audioSound.play()
			}
		}
	})

	const handlerBuy = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		buy()
	}

	return (
		<button
			disabled={exists || isPending}
			onClick={handlerBuy}
			className={cn(styles.buy, {
				[styles['not-money']]: user && user.profit < price
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
