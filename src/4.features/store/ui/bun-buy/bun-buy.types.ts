import { ButtonHTMLAttributes } from 'react'

import { IStore } from '@/5.entities/store'

export interface IBunBuyProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Omit<IStore, 'name'> {
	bunName: string
}
