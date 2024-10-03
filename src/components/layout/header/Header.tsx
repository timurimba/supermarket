import { useLocation } from 'react-router-dom'

import ExitButton from '@/components/shared/exit-button/ExitButton'

import coin from '@/assets/images/coin.svg'
import cup from '@/assets/images/cup.svg'
import dollar from '@/assets/images/dollar.svg'

import styles from './Header.module.scss'
import { pathsWithExitButton } from './header.data'

const Header = () => {
	const { pathname } = useLocation()

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
					<span>999</span>
				</div>
				<div>
					<img src={coin} alt='' />
					<span>0.09</span>
				</div>
			</div>
		</header>
	)
}

export default Header
