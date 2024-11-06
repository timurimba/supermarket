import camera from '../assets/images/camera.svg'
import guard from '../assets/images/guard.svg'
import manager from '../assets/images/manager.svg'
import quality from '../assets/images/quality.svg'
import { EnumNameStoreItem } from '../model/store.types'

export const getImg = (bunName: EnumNameStoreItem) => {
	switch (bunName) {
		case EnumNameStoreItem.MANAGER:
			return manager
		case EnumNameStoreItem.QUALITY:
			return quality
		case EnumNameStoreItem.SECURITY:
			return guard
		case EnumNameStoreItem.VIDEO:
			return camera
	}
}
