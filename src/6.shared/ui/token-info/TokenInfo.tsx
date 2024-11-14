import { SetStateAction } from 'jotai'
import type { Dispatch, FC } from 'react'

import treasure from '../../assets/images/treasure.svg'
import x from '../../assets/images/x-reminder.svg'

import styles from './TokenInfo.module.scss'
import { Animated, useCustomTranslation } from '@/6.shared'

const TokenInfo: FC<{
	setIsOpenTokenInfo: Dispatch<SetStateAction<boolean>>
}> = ({ setIsOpenTokenInfo }) => {
	const { info, achievements } = useCustomTranslation('about')

	return (
		<div className={styles.info}>
			<button onClick={() => setIsOpenTokenInfo(false)}>
				<img src={x} alt='' />
			</button>
			<Animated>
				<img src={treasure} alt='' />
				<p>{achievements}</p>
				<p>{info}</p>
			</Animated>
		</div>
	)
}

export default TokenInfo
