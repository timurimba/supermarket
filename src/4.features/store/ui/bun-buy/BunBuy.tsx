import { useMutation } from '@tanstack/react-query'
import { InvoiceStatus, openInvoice, popup } from '@telegram-apps/sdk'
import { Check } from 'lucide-react'
import type { FC } from 'react'

import styles from './BunBuy.module.scss'
import { IBunBuyProps } from './bun-buy.types'
import { StoreService } from '@/5.entities/store'
import { Loader, queryClient, star, useCustomTranslation } from '@/6.shared'

const BunBuy: FC<IBunBuyProps> = ({ bunName, info }) => {
	const { wrong } = useCustomTranslation('store')
	const { mutate: purchase, isPending } = useMutation({
		mutationKey: ['buy', bunName],
		mutationFn: () => StoreService.buy(bunName),
		onSuccess: async data => {
			const invoiceStatus: InvoiceStatus = await openInvoice(data, 'url')
			if (invoiceStatus === 'paid') {
				queryClient.invalidateQueries({
					queryKey: ['buns']
				})
			}
			if (invoiceStatus === 'failed') {
				popup.open(wrong)
			}
		}
	})

	return (
		<button
			onClick={() => purchase()}
			disabled={isPending || info.exists}
			className={styles.buy}
		>
			{isPending ? (
				<Loader />
			) : !info.exists ? (
				<>
					<span>{info.price}</span>
					<img src={star} alt='' />
				</>
			) : (
				<Check className='text-white' />
			)}
		</button>
	)
}

export default BunBuy
