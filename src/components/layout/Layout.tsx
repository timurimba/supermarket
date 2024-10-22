import { type FC, type PropsWithChildren, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { routes } from '@/providers/router/router.data'

import music from '@/assets/audio/music.mp3'
import sound from '@/assets/audio/sound.mp3'

import { useSound } from '@/hooks/useSound'
import { useUser } from '@/hooks/useUser'

import styles from './Layout.module.scss'
import Header from './header/Header'
import { UserService } from '@/services/user.service'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation()
	const { setIsMusic, setIsSound, isMusic, isSound } = useSound()
	const audioSoundRef = useRef(new Audio(sound))
	const audioMusicRef = useRef(new Audio(music))
	const { user } = useUser()
	const route = routes.find(r => r.path === pathname)!

	const { i18n } = useTranslation()
	useEffect(() => {
		const languageCodeFromLs = localStorage.getItem('language_code')
		if (languageCodeFromLs) {
			i18n.changeLanguage(languageCodeFromLs)
		} else {
			// const languageCode = 'ru'
			const languageCode = user?.language_code

			if (languageCode === 'ru') i18n.changeLanguage(languageCode)
		}
	}, [])

	useEffect(() => {
		audioMusicRef.current.loop = true
		audioSoundRef.current.loop = true

		const isOffSound = localStorage.getItem('offSound')
		const isOffMusic = localStorage.getItem('offMusic')
		if (isOffMusic === 'off') {
			setIsMusic(false)
		}
		if (isOffSound === 'off') {
			setIsSound(false)
		}

		const playAudios = async () => {
			if (!isOffMusic) {
				await audioMusicRef.current.play()
			}
			if (!isOffSound) {
				await audioSoundRef.current.play()
			}
			document.removeEventListener('click', playAudios)
		}

		document.addEventListener('click', playAudios)
	}, [])

	useEffect(() => {
		if (isMusic) {
			audioMusicRef.current.play()
			localStorage.removeItem('offMusic')
		} else {
			audioMusicRef.current.pause()
			localStorage.setItem('offMusic', 'off')
		}
	}, [isMusic])

	useEffect(() => {
		if (isSound) {
			audioSoundRef.current.play()
			localStorage.removeItem('offSound')
		} else {
			audioSoundRef.current.pause()
			localStorage.setItem('offSound', 'off')
		}
	}, [isSound])

	useEffect(() => {
		setInterval(() => {
			UserService.setActivity()
		}, 60000)
	}, [])

	return (
		<div
			style={{
				background: `linear-gradient(to bottom, ${route.headerBg} 250px, ${route.mainBg} 250px)`
			}}
			className={styles.layout}
		>
			<Header />
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default Layout
