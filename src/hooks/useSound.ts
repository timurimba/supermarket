import { useContext } from 'react'

import { SoundContext } from '@/providers/sound/SoundProvider'

export const useSound = () => useContext(SoundContext)
