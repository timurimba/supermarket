import { EnumDepartmentName } from '@/5.entities'

export const getBgColor = (department: string) => {
	switch (department) {
		case EnumDepartmentName.FRUITS:
			return '#45783E'
		case EnumDepartmentName.BAKERY:
			return '#E7A37F'
		case EnumDepartmentName.CLOTHING:
			return '#D5AF88'
		case EnumDepartmentName.MEAT:
			return '#DD9B8A'
		case EnumDepartmentName.PERFUMERY:
			return '#A872BD'
		case EnumDepartmentName.SEAFOOD:
			return '#6FB2D0'
	}
}
