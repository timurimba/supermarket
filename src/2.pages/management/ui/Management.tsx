import { type FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './Management.module.scss'
import Switching from './switching/Switching'
import { DepartmentsBuilding, DepartmentsStats } from '@/3.widgets'
import { AnimatedPage, Title, useCustomTranslation } from '@/6.shared'

const Management: FC = () => {
	const [type, setType] = useState<'building' | 'stats'>('building')
	const { title } = useCustomTranslation('management')
	const [searchParams] = useSearchParams()
	const query: any = searchParams.get('type')

	useEffect(() => {
		if (query) {
			setType(query)
		}
	}, [query])

	return (
		<div className={styles.management}>
			<Title>{title}</Title>
			<Switching type={type} setType={setType} />
			<div>
				{type === 'building' ? <DepartmentsBuilding /> : <DepartmentsStats />}
			</div>
		</div>
	)
}

export default AnimatedPage(Management)
