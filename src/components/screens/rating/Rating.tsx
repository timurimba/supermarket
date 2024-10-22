import { useInfiniteQuery } from '@tanstack/react-query'
import { type FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import cup1 from '@/assets/images/cup-1.svg'
import cup2 from '@/assets/images/cup-2.svg'
import cup3 from '@/assets/images/cup-3.svg'
import cupOther from '@/assets/images/cup-other.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Rating.module.scss'
import RatingItem from './rating-item/RatingItem'
import { UserService } from '@/services/user.service'

const Rating: FC = () => {
	const { title, place, nickname, token } = useCustomTranslation('rating')

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

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, hasNextPage])

	const getImg = (index: number) => {
		switch (index) {
			case 1:
				return cup1
			case 2:
				return cup2
			case 3:
				return cup3
			default:
				return cupOther
		}
	}

	return (
		<div className={styles.rating}>
			<HeadingWithExit className='!mt-10'>{title}</HeadingWithExit>
			<div>
				<table>
					<thead>
						<tr>
							<th>{place}</th>
							<th>{nickname}</th>
							<th>{token}</th>
						</tr>
					</thead>
					<tbody>
						{status && data
							? data.map((r, index) => {
									const isLastItem = index === data.length - 1
									return (
										<RatingItem
											ref={isLastItem ? ref : null}
											key={r.tg_login}
											img={getImg(index + 1)}
											tg_login={r.tg_login}
											profit={r.profit}
										/>
									)
								})
							: ''}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Rating
