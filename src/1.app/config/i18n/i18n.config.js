import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import locales from '../../assets/locales/locales'

i18next.use(initReactI18next).init({
	debug: true,
	fallbackLng: 'en',
	returnObjects: true,
	lng: 'en',
	resources: locales
})
