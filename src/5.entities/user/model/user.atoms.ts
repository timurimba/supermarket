import { atom } from 'jotai'

import sound from '../assets/audio/sound.mp3'

export const isMusicOffAtom = atom(false)
export const isSoundOffAtom = atom(false)
export const audioSoundAtom = atom(new Audio(sound))
