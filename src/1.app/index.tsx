import { createRoot } from 'react-dom/client'

import './config/i18n/i18n.config'
import './styles/index.scss'
import App from './ui/App'

createRoot(document.getElementById('root')!).render(<App />)
