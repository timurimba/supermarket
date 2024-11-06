import { Dispatch, SetStateAction } from 'react'

export interface ISwitchingProps {
	type: 'building' | 'stats'
	setType: Dispatch<SetStateAction<'building' | 'stats'>>
}
