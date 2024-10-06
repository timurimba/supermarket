import type { FC } from 'react'
import { Link } from 'react-router-dom'

import ExitButton from '@/components/shared/exit-button/ExitButton'
import Title from '@/components/shared/title/Title'

import bd from '@/assets/images/bakery-depart.svg'
import chart from '@/assets/images/chart.svg'
import aboutImg from '@/assets/images/control-about.svg'
import fd from '@/assets/images/fish-depart.svg'
import hammer from '@/assets/images/hammer.svg'
import md from '@/assets/images/meat-depart.svg'
import pd from '@/assets/images/parfume-depart.svg'
import vd from '@/assets/images/vegetable-depart.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'

import styles from './Control.module.scss'
import ControlDepartment from './control-department/ControlDepartment'

const Control: FC = () => {
	const { title, structure, about } = useCustomTranslation('control')

	return (
		<div className={styles.control}>
			<div className='flex m-2 justify-center'>
				<Title>{title}</Title>
			</div>
			<div className={styles.heading}>
				<div>
					<img src={hammer} alt='' />
					<span>{structure}</span>
				</div>
				<Link to={'/indicators'}>
					<img src={chart} alt='' />
				</Link>
				<ExitButton />
			</div>
			<div className={styles.about}>
				<img src={aboutImg} alt='' />
				<div>
					<strong>{structure}</strong>
					<p>{about}</p>
				</div>
			</div>
			<div className={styles.departments}>
				<ControlDepartment
					path='/vegetable-department'
					img={vd}
					cash={5}
					expand={() => null}
					title='Овощной отдел'
				/>
				<ControlDepartment
					path='/bakery'
					img={bd}
					cash={5}
					expand={() => null}
					title='Пекарня'
				/>
				<ControlDepartment
					img={fd}
					path='/fish-department'
					cash={5}
					expand={() => null}
					title='Рыбный отдел'
				/>
				<ControlDepartment
					path='/meat-department'
					img={md}
					cash={5}
					expand={() => null}
					title='Мясной отдел'
				/>
				<ControlDepartment
					img={pd}
					path='/perfumery'
					cash={5}
					expand={() => null}
					title='Парфюмерия'
				/>
			</div>
		</div>
	)
}

export default Control
