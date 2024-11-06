import type { FC, PropsWithChildren } from 'react'

import styles from './SpecialOfferWidget.module.scss'
import { useCustomTranslation } from '@/6.shared'

const SpecialOfferWidget: FC<PropsWithChildren> = ({ children }) => {
	const { subtitle, hours, extra, description } =
		useCustomTranslation('special_offer')

	return (
		<div className={styles.wrapper}>
			<h2>{subtitle}:</h2>
			<div>
				{hours} {extra}
			</div>
			<p>{description}</p>
			{children}
		</div>
	)
}

export default SpecialOfferWidget
