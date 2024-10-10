import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import camera from '@/assets/images/shop-camera.svg'
import manager from '@/assets/images/shop-manager.svg'
import police from '@/assets/images/shop-police.svg'
import quility from '@/assets/images/shop-qualities.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Store.module.scss'
import StoreItem from './store-item/StoreItem'
import { StoreService } from '@/services/store.service'
import { EnumNameStoreItem } from '@/types/store.types'

const Shop: FC = () => {
	const { title, upgrades } = useCustomTranslation('shop')
	const { data, isLoading } = useQuery({
		queryKey: ['shop-items'],
		queryFn: () => StoreService.getAll()
	})

	const getImg = (name: EnumNameStoreItem) => {
		switch (name) {
			case EnumNameStoreItem.MANAGER:
				return manager
			case EnumNameStoreItem.QUALITY:
				return quility
			case EnumNameStoreItem.SECURITY:
				return police
			case EnumNameStoreItem.VIDEO:
				return camera
		}
	}

	return (
		<div className={styles.shop}>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div>
				<h1>{upgrades}</h1>
				<div>
					{!isLoading && data
						? data.map(s => (
								<StoreItem
									key={s.name}
									img={getImg(s.name)}
									info={s.info}
									name={s.name}
								/>
							))
						: ''}
				</div>
			</div>
		</div>
	)
}

export default Shop
