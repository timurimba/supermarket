import type { FC } from 'react'

import specialOffer from '../assets/images/special-offer.svg'

import styles from './SpecialOffer.module.scss'
import { SpecialOfferWidget } from '@/3.widgets'
import { BuySpecialOffer } from '@/4.features'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const SpecialOffer: FC = () => {
	const { title, who } = useCustomTranslation('special_offer')
	return (
		<div className={styles.special}>
			<Title>{title}</Title>
			<div>
				<div>
					<img className='mx-auto mb-5' src={specialOffer} alt='' />
					<span>{who}</span>
				</div>
				<SpecialOfferWidget>
					<BuySpecialOffer />
				</SpecialOfferWidget>
			</div>
		</div>
	)
}

export default AnimatedPage(SpecialOffer)
