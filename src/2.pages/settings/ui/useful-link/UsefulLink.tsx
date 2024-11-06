import type { FC } from 'react'

import supportLogo from '../../assets/images/support.svg'
import ourChannelLogo from '../../assets/images/telegram.svg'

import styles from './UsefulLink.module.scss'
import { useCustomTranslation } from '@/6.shared'

const UsefulLink: FC<{ type: 'support' | 'our_channel' }> = ({ type }) => {
	const { ourChannel, support } = useCustomTranslation('settings')
	return (
		<a href='#' className={styles.useful}>
			<div>
				<img src={type === 'support' ? supportLogo : ourChannelLogo} alt='' />
			</div>
			<span>{type === 'our_channel' ? ourChannel : support}</span>
		</a>
	)
}

export default UsefulLink
