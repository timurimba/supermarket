import Bakery from '@/components/screens/bakery/Bakery'
import Clothes from '@/components/screens/clothes/Clothes'
import FishDepartment from '@/components/screens/fish-department/FishDepartment'
import Home from '@/components/screens/home/Home'
import Indicators from '@/components/screens/indicators/Indicators'
import MeatDepartment from '@/components/screens/meat-department/MeatDepartment'
import Perfumery from '@/components/screens/perfumery/Perfumery'
import Rating from '@/components/screens/rating/Rating'
import Settings from '@/components/screens/settings/Settings'
import Shop from '@/components/screens/shop/Shop'
import SpecialOffer from '@/components/screens/special-offer/SpecialOffer'
import Tasks from '@/components/screens/tasks/Tasks'
import VegetableDepartment from '@/components/screens/vegetable-department/VegetableDepartment'
import Cashiers from '@/components/screens/сashiers/Cashiers'

import { IRoute } from './router.types'

export const routes: IRoute[] = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/rating',
		component: Rating
	},
	{
		path: '/cashiers',
		component: Cashiers
	},
	{
		path: '/bakery',
		component: Bakery
	},
	{
		path: '/clothes',
		component: Clothes
	},
	{
		path: '/fish-department',
		component: FishDepartment
	},
	{
		path: '/indicators',
		component: Indicators
	},
	{
		path: '/meat-department',
		component: MeatDepartment
	},
	{
		path: '/perfumery',
		component: Perfumery
	},
	{
		path: '/settings',
		component: Settings
	},
	{
		path: '/shop',
		component: Shop
	},
	{
		path: '/special-offer',
		component: SpecialOffer
	},
	{
		path: '/tasks',
		component: Tasks
	},
	{
		path: '/vegetable-department',
		component: VegetableDepartment
	}
]
