import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resourcesLanguages } from './assets/languages/languages.data'

i18next.use(initReactI18next).init({
	debug: true,
	fallbackLng: 'en',
	lng: 'en',
	resources: resourcesLanguages
})
