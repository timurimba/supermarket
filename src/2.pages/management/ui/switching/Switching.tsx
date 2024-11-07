import cn from 'clsx'
import type { FC } from 'react'

import styles from './Switching.module.scss'
import { ISwitchingProps } from './switching.types'
import hammer from '@/2.pages/management/assets/images/hammer.svg'
import { useCustomTranslation } from '@/6.shared'
import char from '@/6.shared/assets/images/char.svg'

const Switching: FC<ISwitchingProps> = ({ setType, type }) => {
	const { title: titleBuilding } = useCustomTranslation('building')
	const { title: titleStats } = useCustomTranslation('stats')

	return (
		<div className={styles.switching}>
			<div>
				<button
					onClick={() => setType('building')}
					className={cn({
						[styles.active]: type === 'building'
					})}
				>
					<span>{titleBuilding}</span>
					<img src={hammer} alt='' />
				</button>
			</div>
			<div>
				<button
					onClick={() => setType('stats')}
					className={cn({
						[styles.active]: type === 'stats'
					})}
				>
					<img src={char} alt='' />
					<span>{titleStats}</span>
				</button>
			</div>
		</div>
	)
}

export default Switching
