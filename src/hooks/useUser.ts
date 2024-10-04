import { useInitData } from '@vkruglikov/react-telegram-web-app'

export const useUser = () => {
	const [initDataUnSafe] = useInitData()

	return {
		...initDataUnSafe
	}
}
