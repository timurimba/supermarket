import { useMutation } from '@tanstack/react-query'
import { openLink } from '@telegram-apps/sdk-react'
import cn from 'clsx'
import { Check } from 'lucide-react'
import type { FC } from 'react'

import ButtonStar from '@/components/shared/button-star/ButtonStar'
import Loader from '@/components/shared/loader/Loader'

import dollar from '@/assets/images/dollar.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './StoreItem.module.scss'
import { IStoreItemProps } from './store-item.types'
import { StoreService } from '@/services/store.service'
import { EnumNameStoreItem } from '@/types/store.types'

const StoreItem: FC<IStoreItemProps> = ({ name, info, img }) => {
	const { title, description } = useCustomTranslation(`shop.${name}`)
	const { mutate, isPending } = useMutation({
		mutationKey: ['buy'],
		mutationFn: () => StoreService.buy(name),
		onSuccess: data => {
			openLink(data)
		}
	})

	const getContent = () => {
		if (isPending) {
			return <Loader />
		}
		if (info.exists) {
			return <Check size={30} />
		}

		return info.price
	}

	return (
		<div className={styles.wrapper}>
			<div>
				<div>
					<img src={img} alt='' />
					<h1>{title}</h1>
				</div>
				<p
					className={cn({
						'!text-[#3D8033]': name === EnumNameStoreItem.QUALITY
					})}
				>
					{name === EnumNameStoreItem.QUALITY && <img src={dollar} alt='' />}
					{description}
				</p>
			</div>
			<ButtonStar disabled={isPending || info.exists} buy={mutate}>
				{getContent()}
			</ButtonStar>
		</div>
	)
}

export default StoreItem
