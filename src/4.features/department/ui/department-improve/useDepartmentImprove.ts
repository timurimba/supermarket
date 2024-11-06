import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'

import {
	DepartmentService,
	EnumDepartmentName,
	audioSoundAtom,
	isSoundOffAtom
} from '@/5.entities'
import { queryClient } from '@/6.shared'

export const useDepartmentImprove = (name: string) => {
	const [isSoundOff] = useAtom(isSoundOffAtom)
	const [audioSound] = useAtom(audioSoundAtom)

	const { mutate: upgrade, isPending: isPendingUpgrade } = useMutation({
		mutationKey: ['upgrade', EnumDepartmentName],
		mutationFn: () => DepartmentService.improveLevel(name),
		onSuccess: () => {
			if (!isSoundOff) {
				audioSound.play()
			}
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
			queryClient.invalidateQueries({
				queryKey: ['level']
			})
			queryClient.invalidateQueries({
				queryKey: ['employee', name]
			})
			queryClient.invalidateQueries({
				queryKey: ['department', name]
			})
		}
	})

	const { mutate: hire, isPending: isPendingHire } = useMutation({
		mutationKey: ['hire', EnumDepartmentName],
		mutationFn: () => DepartmentService.buyEmployees(name),
		onSuccess: () => {
			if (!isSoundOff) {
				audioSound.play()
			}
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
			queryClient.invalidateQueries({
				queryKey: ['employee']
			})
			queryClient.invalidateQueries({
				queryKey: ['employee', name]
			})
			queryClient.invalidateQueries({
				queryKey: ['department', name]
			})
		}
	})

	const isPending = isPendingHire || isPendingUpgrade

	return {
		isPending,
		hire,
		upgrade
	}
}
