import type { FC } from 'react'

import styles from './Checkbox.module.scss'
import { ICheckboxProps } from './checkbox.types'

const Checkbox: FC<ICheckboxProps> = ({ setOn, isOn }) => {
	return (
		<label className={styles.checkbox}>
			<input
				onChange={() => setOn(prev => !prev)}
				checked={isOn}
				type='checkbox'
			/>
			<div>
				<div></div>
			</div>
		</label>
	)
}

export default Checkbox
