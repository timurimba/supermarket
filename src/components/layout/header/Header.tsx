import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { formatPrice } from '@/components/screens/management/management-department/management-department.utils'
import ExitButton from '@/components/shared/exit-button/ExitButton'

import coin from '@/assets/images/coin.svg'
import cup from '@/assets/images/cup.svg'
import dollar from '@/assets/images/dollar.svg'

import styles from './Header.module.scss'
import { pathsWithExitButton } from './header.data'
import { UserService } from '@/services/user.service'

const Header = () => {
	const { pathname } = useLocation()

	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.getInfo()
	})

	return (
		<header className={styles.header}>
			<div>
				<button>
					<img src={cup} alt='' />
				</button>
				{pathsWithExitButton.includes(pathname) && <ExitButton />}
			</div>
			<div>
				<div>
					<img src={dollar} alt='' />
					<span>${formatPrice(data!.profit)}</span>
				</div>
				<div>
					<img src={coin} alt='' />
					<span>${data?.coin}</span>
				</div>
			</div>
		</header>
	)
}

export default Header
