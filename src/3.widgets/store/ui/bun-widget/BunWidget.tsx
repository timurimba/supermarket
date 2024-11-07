import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './BunWidget.module.scss'
import { BunBuy } from '@/4.features'
import { Bun, StoreService } from '@/5.entities/store'
import { Animated } from '@/6.shared'

const BunWidget: FC = () => {
	const { data: buns, isLoading } = useQuery({
		queryKey: ['buns'],
		queryFn: () => StoreService.getAll()
	})

	return (
		<div className={styles.wrapper}>
			{buns && !isLoading ? (
				buns.map(bun => (
					<Animated key={bun.name}>
						<Bun bunName={bun.name}>
							<BunBuy bunName={bun.name} info={bun.info} />
						</Bun>
					</Animated>
				))
			) : (
				<>
					<Skeleton className=' w-full h-[265px] !rounded-xl' />
					<Skeleton className=' w-full h-[265px] !rounded-xl' />
					<Skeleton className=' w-full h-[265px] !rounded-xl' />
					<Skeleton className=' w-full h-[265px] !rounded-xl' />
				</>
			)}
		</div>
	)
}

export default BunWidget
