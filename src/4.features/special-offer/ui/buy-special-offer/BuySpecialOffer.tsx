import { useMutation, useQuery } from '@tanstack/react-query'
import { InvoiceStatus, openInvoice, popup } from '@telegram-apps/sdk'
import { Check } from 'lucide-react'
import type { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './BuySpecialOffer.module.scss'
import { StoreService } from '@/5.entities/store'
import { Animated, queryClient, star, useCustomTranslation } from '@/6.shared'

const BuySpecialOffer: FC = () => {
	const { hire } = useCustomTranslation('special_offer')
	const { wrong } = useCustomTranslation('store')

	const { data, isLoading } = useQuery({
		queryKey: ['special-offer'],
		queryFn: () => StoreService.getSpecialOffer()
	})

	const { mutate: buy } = useMutation({
		mutationKey: ['general-manager'],
		mutationFn: () => StoreService.buy('manager'),
		onSuccess: async data => {
			const invoiceStatus: InvoiceStatus = await openInvoice(data, 'url')
			if (invoiceStatus === 'paid') {
				queryClient.invalidateQueries({
					queryKey: ['special-offer']
				})
			}
			if (invoiceStatus === 'failed') {
				popup.open(wrong)
			}
		}
	})

	return data && !isLoading ? (
		!data.info.exists ? (
			<Animated>
				<button onClick={() => buy()} className={styles.buy}>
					<span>{hire}</span>
					<div>
						<span>{data.info.price}</span>
						<img src={star} alt='' />
					</div>
				</button>
			</Animated>
		) : (
			<Check className='text-white' />
		)
	) : (
		<Skeleton
			baseColor='#FFC850'
			className='max-w-[132px] mx-auto !block  h-[56px]'
		/>
	)
}

export default BuySpecialOffer
