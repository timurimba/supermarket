import cn from 'clsx'
import type { FC } from 'react'

import dollar from '@/assets/images/dollar.svg'
import star from '@/assets/images/star.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './StoreItem.module.scss'
import { IStoreItemProps } from './store-item.types'
import { EnumNameStoreItem } from '@/types/store.types'

const StoreItem: FC<IStoreItemProps> = ({ name, info, img }) => {
	const { title, description } = useCustomTranslation(`shop.${name}`)

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
			<button>
				{info.price}
				<img src={star} alt='' />
			</button>
		</div>
	)
}

export default StoreItem
