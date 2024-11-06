import type { FC, PropsWithChildren } from 'react'

import { getImg } from '../../lib/get-image'
import { EnumNameStoreItem } from '../../model/store.types'

import styles from './Bun.module.scss'
import { IBunProps } from './bun.types'
import { dollar, useCustomTranslation } from '@/6.shared'

const Bun: FC<PropsWithChildren<IBunProps>> = ({ bunName, children }) => {
	const { title, description } = useCustomTranslation(`store.${bunName}`)
	return (
		<div className={styles.bun}>
			<div>
				<div>
					<img src={getImg(bunName)} alt='' />
					<h3
						dangerouslySetInnerHTML={{ __html: title.replace(/ /g, '<br />') }}
					/>
				</div>
				<p>
					{bunName === EnumNameStoreItem.QUALITY && (
						<img className='w-8' src={dollar} alt='' />
					)}
					{description}
				</p>
			</div>
			{children}
		</div>
	)
}

export default Bun
