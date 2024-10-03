import { FC } from 'react'

export interface IRoute {
	path: string
	component: FC
	headerBg: string
	mainBg: string
}
