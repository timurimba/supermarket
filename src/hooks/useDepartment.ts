import { useMutation, useQuery } from '@tanstack/react-query'

import { queryClient } from '@/providers/tanstack-query/TanstackQuery'

import { useCustomTranslation } from './useCustomTranslation'
import { DepartmentService } from '@/services/department.service'
import { EnumDepartmentName } from '@/types/department.types'

export const useDepartment = (departmentName: EnumDepartmentName) => {
	const { data } = useQuery({
		queryKey: [`${departmentName}-department`],
		queryFn: () => DepartmentService.get(departmentName)
	})

	const { data: priceNextLevel } = useQuery({
		queryKey: [`${departmentName}-department-next-level`],
		queryFn: () => DepartmentService.getNextLevelPrice(departmentName)
	})

	const { data: priceEmployee } = useQuery({
		queryKey: [`${departmentName}-department-price-employee`],
		queryFn: () => DepartmentService.getNextEmployeePrice(departmentName),
		enabled: data?.employees! < 3
	})

	const { mutate: mutateImproveLevel } = useMutation({
		mutationKey: [`${departmentName}-department-improve-level`],
		mutationFn: () => DepartmentService.improveLevel(departmentName),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [`${departmentName}-department`]
			})
			queryClient.invalidateQueries({
				queryKey: [`${departmentName}-department-next-level`]
			})
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
		}
	})

	const { mutate: mutateBuyEmployees } = useMutation({
		mutationKey: [`${departmentName}-department-buy-employees`],
		mutationFn: () => DepartmentService.buyEmployees(departmentName),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [`${departmentName}-department`]
			})
			queryClient.invalidateQueries({
				queryKey: [`${departmentName}-department-price-employee`]
			})
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
		}
	})

	const { title, improve_title } = useCustomTranslation(`${departmentName}`)

	const translationKey = data?.current_level_name
		? `${departmentName}.${data.current_level_name}`
		: ''
	const { titleLvl, descriptionLvl } = useCustomTranslation(translationKey)

	return {
		title,
		improve_title,
		titleLvl,
		descriptionLvl,
		priceEmployee,
		priceNextLevel,
		mutateBuyEmployees,
		mutateImproveLevel,
		data
	}
}
