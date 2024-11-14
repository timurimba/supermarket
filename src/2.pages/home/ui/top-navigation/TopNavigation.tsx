import cn from 'clsx'
import { useAtom } from 'jotai'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import manager from '../../assets/images/manager-home.svg'
import x from '../../assets/images/x.svg'

import styles from './TopNavigation.module.scss'
import { stepTutorialAtom } from '@/5.entities'
import char from '@/6.shared/assets/images/char.svg'
import cup from '@/6.shared/assets/images/cup-1.svg'

const TopNavigation: FC = () => {
	const [stepTutorial] = useAtom(stepTutorialAtom)

	return (
		<div className={styles.wrapper}>
			<div>
				<Link
					className={cn({
						'!z-[100]': stepTutorial === 5
					})}
					to='/rating'
				>
					<img className='w-[26px] h-[26px]' src={cup} alt='' />
				</Link>
				<Link to='/special-offer'>
					<img src={manager} alt='' />
					<div>
						<img src={x} alt='' />
					</div>
				</Link>
			</div>
			<div>
				<Link
					className={cn({
						'!z-[100]': stepTutorial === 3
					})}
					to='/management?type=stats'
				>
					<img src={char} alt='' />
				</Link>
			</div>
		</div>
	)
}

export default TopNavigation
