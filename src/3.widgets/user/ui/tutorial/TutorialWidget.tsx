import { useAtom } from 'jotai'
import { type FC, useEffect } from 'react'

import { Tutorial, stepTutorialAtom } from '@/5.entities'

const TutorialWidget: FC = () => {
	const [stepTutorial, setStepTutorial] = useAtom(stepTutorialAtom)

	useEffect(() => {
		document.getElementById('root')!.style.overflowY = 'hidden'

		return () => {
			document.getElementById('root')!.style.overflowY = 'scroll'
		}
	}, [])
	useEffect(() => {
		let mounted = false

		const handlerClick = () => {
			if (mounted) {
				setStepTutorial(prev => prev + 1)
			} else {
				mounted = true
			}
		}
		document.addEventListener('click', handlerClick)

		return () => document.removeEventListener('click', handlerClick)
	}, [])

	return <Tutorial step={stepTutorial} />
}

export default TutorialWidget
