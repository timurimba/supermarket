export const formatPrice = (num: number) => {
	if (num >= 1000000000) {
		return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
	} else if (num >= 1000000) {
		return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
	} else {
		return num.toString()
	}
}
