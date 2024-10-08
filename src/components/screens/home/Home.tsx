import type { FC } from 'react'
import { Link } from 'react-router-dom'

import cashiers from '@/assets/images/cashiers-link.svg'
import chart from '@/assets/images/chart.svg'
import human from '@/assets/images/human.svg'
import management from '@/assets/images/management-link.svg'
import plus from '@/assets/images/plus.svg'
import settings from '@/assets/images/settings.svg'
import shop from '@/assets/images/shop-link.svg'
import tasksTop from '@/assets/images/tasks-link-top.svg'
import tasks from '@/assets/images/tasks-link.svg'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<div>
				<Link to={'/special-offer'}>
					<img src={human} alt='' />
					<div>
						<img src={plus} alt='' />
					</div>
				</Link>
				<div>
					<Link to='/indicators'>
						<img src={chart} alt='' />
					</Link>
					<Link to='/tasks'>
						<img src={tasksTop} alt='' />
					</Link>
				</div>
			</div>
			<div>
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
					<Link to='/shop'>
						<img src={shop} alt='' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
