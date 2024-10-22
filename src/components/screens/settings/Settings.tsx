import { type FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import HeadingWithExit from '@/components/shared/heading-with-exit/HeadingWithExit'

import supportImg from '@/assets/images/support.svg'
import tg from '@/assets/images/tg.svg'

import { useCustomTranslation } from '@/hooks/useCustomTranslation'
import { useSound } from '@/hooks/useSound'

import styles from './Settings.module.scss'
import Checkbox from './checkbox/Checkbox'

const Settings: FC = () => {
	const swiperRef = useRef<any>(null)
	const { i18n } = useTranslation()

	const onSwiperInit = (swiper: any) => {
		swiperRef.current = swiper
	}
	const { setIsMusic, setIsSound, isSound, isMusic } = useSound()
	const {
		title,
		language,
		english,
		russian,
		settingsAudio,
		music,
		sound,
		ourChannel,
		support
	} = useCustomTranslation('settings')

	useEffect(() => {
		const languageCodeFromLs = localStorage.getItem('language_code')
		if (languageCodeFromLs === 'ru' || !languageCodeFromLs) {
			swiperRef.current.slideTo(0)
		} else {
			swiperRef.current.slideTo(1)
		}
	}, [swiperRef.current])

	const handleSlideChange = (swiper: any) => {
		const language = swiper.slides.find((s: HTMLElement) =>
			s.classList.contains('swiper-slide-active')
		).innerText

		if (language === 'Русский') {
			i18n.changeLanguage('ru')
			localStorage.setItem('language_code', 'ru')
		} else {
			i18n.changeLanguage('en')
			localStorage.setItem('language_code', 'en')
		}
	}

	return (
		<div className={styles.settings}>
			<HeadingWithExit>{title}</HeadingWithExit>
			<div>
				<span>{language}:</span>
				<Swiper
					loop
					navigation
					className={styles.slider}
					slidesPerView={1}
					modules={[Navigation]}
					onSwiper={onSwiperInit}
					onSlideChangeTransitionEnd={handleSlideChange}
				>
					<SwiperSlide>
						<span className='text-[#484848] text-2xl font-rubik-one'>
							{russian}
						</span>
					</SwiperSlide>
					<SwiperSlide>
						<span className='text-[#484848] text-2xl font-rubik-one'>
							{english}
						</span>
					</SwiperSlide>
				</Swiper>
			</div>
			<div>
				<h2>{settingsAudio}</h2>
				<div>
					<div>
						<span>{music}</span>
						<Checkbox isOn={isMusic} setOn={setIsMusic} />
					</div>
					<div>
						<span>{sound}</span>
						<Checkbox isOn={isSound} setOn={setIsSound} />
					</div>
				</div>
			</div>
			<a href='#' className={styles.link}>
				<div>
					<img src={tg} alt='' />
				</div>
				<span>{ourChannel}</span>
			</a>
			<a href='#' className={styles.link}>
				<div>
					<img src={supportImg} alt='' />
				</div>
				<span>{support}</span>
			</a>
		</div>
	)
}

export default Settings
