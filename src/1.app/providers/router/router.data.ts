import { EnumRoutes } from './router.consts'
import { IRoute } from './router.types'
import {
	Cashiers,
	Department,
	Home,
	Management,
	Rating,
	Settings,
	SpecialOffer,
	Store,
	Tasks
} from '@/2.pages'

export const bgRoutes: any = {
	[EnumRoutes.HOME]: '#FFC96A',
	[EnumRoutes.MANAGEMENT]: '#564F85',
	[EnumRoutes.FRUITS]: '#173521',
	[EnumRoutes.BAKERY]: '#844727',
	[EnumRoutes.CASHIERS]: '#41748C',
	[EnumRoutes.MEAT]: '#974842',
	[EnumRoutes.PERFUMERY]: '#492352',
	[EnumRoutes.SEAFOOD]: '#305566',
	[EnumRoutes.CLOTHING]: '#573D31',
	[EnumRoutes.SETTINGS]: '#0F5451',
	[EnumRoutes.STORE]: '#1A492A',
	[EnumRoutes.SPECIAL_OFFER]: '#2F217F',
	[EnumRoutes.TASKS]: '#2648A2',
	[EnumRoutes.RATING]: '#24203B'
}

export const routes: IRoute[] = [
	{
		path: EnumRoutes.HOME,
		component: Home
	},
	{
		path: EnumRoutes.MANAGEMENT,
		component: Management
	},
	{
		path: EnumRoutes.DEPARTMENT,
		component: Department
	},
	{
		path: EnumRoutes.STORE,
		component: Store
	},
	{
		path: EnumRoutes.SPECIAL_OFFER,
		component: SpecialOffer
	},
	{
		path: EnumRoutes.TASKS,
		component: Tasks
	},
	{
		path: EnumRoutes.RATING,
		component: Rating
	},
	{
		path: EnumRoutes.SETTINGS,
		component: Settings
	},
	{
		path: EnumRoutes.CASHIERS,
		component: Cashiers
	}
]
