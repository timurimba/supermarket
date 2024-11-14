import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useAtom } from 'jotai'
import Skeleton from 'react-loading-skeleton'

import info from '../assets/images/info.svg'

import styles from './Header.module.scss'
import { UserService, stepTutorialAtom } from '@/5.entities'
import { coin, formatPrice } from '@/6.shared'
import dollar from '@/6.shared/assets/images/dollar.svg'
import Animated from '@/6.shared/ui/animated/Animated'

const Header = () => {
	const [stepTutorial] = useAtom(stepTutorialAtom)

	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})

	return (
		<header className={styles.header}>
			<div>
				{data && !isLoading ? (
					<>
						<Animated
							className={cn({
								'!z-[100]': stepTutorial === 2
							})}
						>
							<img src={dollar} alt='' />
							<span>{formatPrice(data ? data.profit : 0)}</span>
						</Animated>
						<Animated>
							<img src={coin} alt='' />
							<span>{formatPrice(data ? data.coin : 0)}</span>
							<img src={info} alt='' />
						</Animated>
					</>
				) : (
					<>
						<Skeleton className='z-20 relative' height={30} width={112} />
						<Skeleton className='z-20 relative' height={30} width={112} />
					</>
				)}
			</div>
		</header>
	)
}

export default Header
