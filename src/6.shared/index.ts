import { instance } from './api/api'
import coin from './assets/images/coin.svg'
import cup1 from './assets/images/cup-1.svg'
import dollar from './assets/images/dollar.svg'
import star from './assets/images/star.svg'
import { AnimatedPage } from './lib/HOC/animated-page/AnimatedPage'
import { formatPrice } from './lib/format-price/format-price'
import { getImgDepartment } from './lib/get-image-department/get-image-department'
import { useCustomTranslation } from './lib/hooks/useCustomTranslation'
import Animated from './ui/animated/Animated'
import Loader from './ui/loader/Loader'
import Title from './ui/title/Title'

export * from './config'
export {
	Animated,
	AnimatedPage,
	coin,
	cup1,
	dollar,
	formatPrice,
	getImgDepartment,
	instance,
	Loader,
	star,
	Title,
	useCustomTranslation
}
