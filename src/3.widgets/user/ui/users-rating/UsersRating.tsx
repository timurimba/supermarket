import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { type FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Skeleton from 'react-loading-skeleton'

import styles from './UsersRating.module.scss'
import { UserRating, UserService } from '@/5.entities'
import { Animated, coin, useCustomTranslation, formatPrice } from '@/6.shared'

const UsersRating: FC = () => {
	const { place, nickname, token } = useCustomTranslation('rating')
	const { ref, inView } = useInView()

	const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['rating'],
		initialPageParam: 0,
		queryFn: ({ pageParam }) => UserService.getRating(pageParam),
		getNextPageParam: (lastPage, allPages) => {
			return allPages.length - 1 + 1
		},
		select: data => data.pages.flat()
	})

	const { data: myRating, isPending } = useQuery({
		queryKey: ['user-rank'],
		queryFn: () => UserService.getRank()
	})

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, hasNextPage])

	return (
		<div className={styles.wrapper}>
			<div>
				<span>{place}</span>
				<span>{nickname}</span>
				<span>{token}</span>
			</div>
			<div>
				{data && status ? (
					data.map((r, index) => {
						const isLastItem = index === data.length - 1
						return (
							<Animated>
								<UserRating
									index={index + 1}
									ref={isLastItem ? ref : null}
									tg_login={r.tg_login}
									coin={r.coin}
								/>
							</Animated>
						)
					})
				) : (
					<>
						<Skeleton className='h-[58px] w-full mt-[14px] !rounded-lg' />
						<Skeleton className='h-[58px] w-full mt-[14px] !rounded-lg' />
						<Skeleton className='h-[58px] w-full mt-[14px] !rounded-lg' />
						<Skeleton className='h-[58px] w-full mt-[14px] !rounded-lg' />
					</>
				)}
			</div>

			{myRating && !isPending ? (
				<Animated className='absolute left-0 bottom-7 w-full'>
					<div className={styles.myRating}>
						<strong>{myRating.rank}</strong>
						<span>{myRating.tg_login}</span>
						<div>
							<img src={coin} alt='' />
							<span>{formatPrice(myRating.coin)}</span>
						</div>
					</div>
				</Animated>
			) : (
				<Skeleton className='h-[58px] w-full !absolute !bottom-7 !left-0 !rounded-none ' />
			)}
		</div>
	)
}

export default UsersRating
