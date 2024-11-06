import { useAtom } from 'jotai'
import type { FC } from 'react'

import styles from './ChangeAudio.module.scss'
import { isMusicOffAtom, isSoundOffAtom } from '@/5.entities'
import { useCustomTranslation } from '@/6.shared'

const ChangeAudio: FC<{ type: 'sound' | 'music' }> = ({ type }) => {
	const { music, sound } = useCustomTranslation('settings')
	const [isMusicOff, setIsMusicOff] = useAtom(isMusicOffAtom)
	const [isSoundOff, setIsSoundOff] = useAtom(isSoundOffAtom)

	const getChecked = () => {
		if (type === 'music') {
			return !isMusicOff
		} else {
			return !isSoundOff
		}
	}

	const handlerChangeAudio = () => {
		if (type === 'music') {
			setIsMusicOff(prev => !prev)
		}
		if (type === 'sound') {
			setIsSoundOff(prev => !prev)
		}
	}

	return (
		<div className={styles.audio}>
			<span>{type === 'music' ? music : sound}</span>
			<label>
				<input
					checked={getChecked()}
					onChange={handlerChangeAudio}
					type='checkbox'
				/>
				<div>
					<div></div>
				</div>
			</label>
		</div>
	)
}

export default ChangeAudio
