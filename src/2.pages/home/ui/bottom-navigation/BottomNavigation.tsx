import type { FC } from 'react'
import { Link } from 'react-router-dom'

import cashiers from '../../assets/images/cashiers.svg'
import management from '../../assets/images/mangement.svg'
import settings from '../../assets/images/settings.svg'
import shop from '../../assets/images/store-home.svg'
import tasks from '../../assets/images/tasks.svg'

import styles from './BottomNavigation.module.scss'

const BottomNavigation: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Link to='/settings'>
					<img src={settings} alt='' />
				</Link>
			</div>
			<div>
				<Link to='/management'>
					<img src={management} alt='' />
				</Link>
				<Link to='/cashiers'>
					<img src={cashiers} alt='' />
				</Link>
				<Link to='/tasks'>
					<img src={tasks} alt='' />
				</Link>
				<Link to='/store'>
					<img src={shop} alt='' />
				</Link>
			</div>
		</div>
	)
}

export default BottomNavigation
