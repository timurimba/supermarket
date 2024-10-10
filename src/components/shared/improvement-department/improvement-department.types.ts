export interface IImprovementDepartmentProps {
	improve: () => void
	type: 'base' | 'employee'
	title?: string
	price?: number
	isCompleted?: boolean
}
