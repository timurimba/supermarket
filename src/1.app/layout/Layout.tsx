import { useAtom } from 'jotai'
import { type FC, type PropsWithChildren, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { bgRoutes } from '../providers/router/router.data'

import styles from './Layout.module.scss'
import music from './assets/audio/music.mp3'
import mask from './assets/images/mask.svg'
import Header from './header/Header'
import { audioSoundAtom, isMusicOffAtom, isSoundOffAtom } from '@/5.entities'
import { queryClient } from '@/6.shared'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { pathname } = useLocation()
	const [isMusicOff, setIsMusicOff] = useAtom(isMusicOffAtom)
	const [isSoundOff, setIsSoundOff] = useAtom(isSoundOffAtom)
	const [audioSound] = useAtom(audioSoundAtom)

	const musicRef = useRef<HTMLAudioElement>(new Audio(music))

	const routeSplit = pathname.split('/')

	const route = `/${routeSplit[routeSplit.length - 1]}`

	useEffect(() => {
		const isMusicOffLs = localStorage.getItem('isMusicOff')
		const isSoundOffLs = localStorage.getItem('isSoundOff')

		if (isMusicOffLs) {
			setIsMusicOff(true)
		}
		if (isSoundOffLs) {
			setIsSoundOff(true)
		}
	}, [])

	useEffect(() => {
		const isMusicOffLs = localStorage.getItem('isMusicOff')

		const playAudios = async () => {
			if (!isMusicOffLs) {
				await musicRef.current.play()
			}
			document.removeEventListener('click', playAudios)
		}

		document.addEventListener('click', playAudios)
	}, [])

	useEffect(() => {
		if (isMusicOff) {
			musicRef.current.pause()
			localStorage.setItem('isMusicOff', 'isOff')
		} else {
			musicRef.current.play()
			localStorage.removeItem('isMusicOff')
		}
	}, [isMusicOff])

	useEffect(() => {
		setInterval(() => {
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
		}, 10000)
	}, [])

	useEffect(() => {
		let intervalId: null | NodeJS.Timeout = null

		if (!isSoundOff) {
			intervalId = setInterval(() => {
				audioSound.play()
			}, 10000)
			localStorage.removeItem('isSoundOff')
		} else {
			localStorage.setItem('isSoundOff', 'off')
		}
		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [isSoundOff])

	return (
		<div style={{ backgroundColor: bgRoutes[route] }} className={styles.layout}>
			<img className='absolute top-0 left-0' src={mask} alt='' />
			<Header />
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default Layout
