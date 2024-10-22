import { Dispatch, SetStateAction } from 'react'

export interface ICheckboxProps {
	setOn: Dispatch<SetStateAction<boolean>>
	isOn: boolean
}
