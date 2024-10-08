import Bakery from '@/components/screens/bakery/Bakery'
import Clothes from '@/components/screens/clothes/Clothes'
import FishDepartment from '@/components/screens/fish-department/FishDepartment'
import Home from '@/components/screens/home/Home'
import Indicators from '@/components/screens/indicators/Indicators'
import Management from '@/components/screens/management/Management'
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
		component: Home,
		// headerBg: 'transparent',
		// mainBg: 'transparent'
		headerBg: '#F0C191',
		mainBg: '#BB9167'
	},
	{
		path: '/rating',
		component: Rating,
		headerBg: '#6FB2D0',
		mainBg: '#518CA7'
	},
	{
		path: '/cashiers',
		component: Cashiers,
		headerBg: '#F0C191',
		mainBg: '#BB9167'
	},
	{
		path: '/bakery',
		component: Bakery,
		headerBg: '#F0A491',
		mainBg: '#BF7555'
	},
	{
		path: '/clothes',
		component: Clothes,
		headerBg: '#6FB2D0',
		mainBg: '#518CA7'
	},
	{
		path: '/fish-department',
		component: FishDepartment,
		headerBg: '#6FB2D0',
		mainBg: '#518CA7'
	},
	{
		path: '/indicators',
		component: Indicators,
		headerBg: '#6FB2D0',
		mainBg: '#518CA7'
	},
	{
		path: '/meat-department',
		component: MeatDepartment,
		headerBg: '#F0A491',
		mainBg: '#BF7555'
	},
	{
		path: '/perfumery',
		component: Perfumery,
		headerBg: '#F091E7',
		mainBg: '#BA55BF'
	},
	{
		path: '/settings',
		component: Settings,
		headerBg: '#C2C2C2',
		mainBg: '#939393'
	},
	{
		path: '/shop',
		component: Shop,
		headerBg: '#8B7DF3',
		mainBg: '#5E5790'
	},
	{
		path: '/special-offer',
		component: SpecialOffer,
		headerBg: '#FFC96A',
		mainBg: '#FFC96A'
	},
	{
		path: '/tasks',
		component: Tasks,
		headerBg: '#8B7DF3',
		mainBg: '#5E5790'
	},
	{
		path: '/vegetable-department',
		component: VegetableDepartment,
		headerBg: '#8B7DF3',
		mainBg: '#5E5790'
	},
	{
		path: '/management',
		component: Management,
		headerBg: '#6FB2D0',
		mainBg: '#518CA7'
	}
]
