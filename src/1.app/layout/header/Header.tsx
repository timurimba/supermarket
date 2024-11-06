import { useQuery } from '@tanstack/react-query'
import Skeleton from 'react-loading-skeleton'

import info from '../assets/images/info.svg'

import styles from './Header.module.scss'
import { UserService } from '@/5.entities'
import { coin, formatPrice } from '@/6.shared'
import dollar from '@/6.shared/assets/images/dollar.svg'
import Animated from '@/6.shared/ui/animated/Animated'

const Header = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})

	return (
		<header className={styles.header}>
			<div>
				{data && !isLoading ? (
					<>
						<Animated>
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
