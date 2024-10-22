import {
	Dispatch,
	type FC,
	type PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

interface ISoundContext {
	isSound: boolean
	isMusic: boolean
	setIsSound: Dispatch<SetStateAction<boolean>>
	setIsMusic: Dispatch<SetStateAction<boolean>>
}

export const SoundContext = createContext<ISoundContext>({} as ISoundContext)

const SoundProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isSound, setIsSound] = useState(true)
	const [isMusic, setIsMusic] = useState(true)

	const value = {
		isSound,
		isMusic,
		setIsSound,
		setIsMusic
	}
	return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export default SoundProvider
