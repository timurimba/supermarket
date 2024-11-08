import { type FC, useState } from 'react'

import Circle from './circle/Circle'
import Dollar from './dollar/Dollar'

const Animation: FC = () => {
	const [isAnimateDollar, setIsAnimateDollar] = useState(false)

	return isAnimateDollar ? (
		<Dollar setIsAnimateDollar={setIsAnimateDollar} />
	) : (
		<Circle setIsAnimateDollar={setIsAnimateDollar} />
	)
}

export default Animation
