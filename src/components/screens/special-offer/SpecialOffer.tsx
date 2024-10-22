import { useMutation } from '@tanstack/react-query'
import type { FC } from 'react'

import ButtonStar from '@/components/shared/button-star/ButtonStar'
import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import manager from '@/assets/images/special-offer-manager.svg'
import decor from '@/assets/images/special-offer.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import { StoreService } from '@/services/store.service'
import styles from './SpecialOffer.module.scss'

const SpecialOffer: FC = () => {
	const { title, hours, extra, subtitle, description, who } =
		useCustomTranslation('special_offer')

	const { mutate, isPending } = useMutation({
		mutationKey: ['buy'],
		mutationFn: () => StoreService.buy('manager'),
		onSuccess: data => {
			window.open(data, '_blank')
		}
	})

	// const { data } = useQuery({
	// 	queryKey: ['special-offer'],
	// 	queryFn: () => StoreService.getSpecialOffer()
	// })

	return (
		<div className={styles.wrapper}>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div>
				<img src={manager} alt='' />
				<div>
					<img src={decor} alt='' />
					<p>{who}</p>
				</div>
			</div>
			<div>
				<div>
					<h2>{subtitle}</h2>
					<div>
						<span>{hours}</span>
						<span>{extra}</span>
					</div>
				</div>
				<p>{description}</p>
			</div>
			<div className='max-w-[168px] mx-auto'>
				<ButtonStar disabled={isPending} buy={mutate} className='!py-1' isHire>
					500
				</ButtonStar>
			</div>
		</div>
	)
}

export default SpecialOffer
