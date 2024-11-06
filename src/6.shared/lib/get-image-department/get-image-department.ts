import bakery1 from '@/6.shared/assets/images/bakery-1.svg'
import bakery2 from '@/6.shared/assets/images/bakery-2.svg'
import bakery3 from '@/6.shared/assets/images/bakery-3.svg'
import bakery4 from '@/6.shared/assets/images/bakery-4.svg'
import clothing1 from '@/6.shared/assets/images/clothing-1.svg'
import clothing2 from '@/6.shared/assets/images/clothing-2.svg'
import clothing3 from '@/6.shared/assets/images/clothing-3.svg'
import clothing4 from '@/6.shared/assets/images/clothing-4.svg'
import fish1 from '@/6.shared/assets/images/fish-1.svg'
import fish2 from '@/6.shared/assets/images/fish-2.svg'
import fish3 from '@/6.shared/assets/images/fish-3.svg'
import fish4 from '@/6.shared/assets/images/fish-4.svg'
import fruits1 from '@/6.shared/assets/images/fruits-1.svg'
import fruits2 from '@/6.shared/assets/images/fruits-2.svg'
import fruits3 from '@/6.shared/assets/images/fruits-3.svg'
import fruits4 from '@/6.shared/assets/images/fruits-4.svg'
import meat1 from '@/6.shared/assets/images/meat-1.svg'
import meat2 from '@/6.shared/assets/images/meat-2.svg'
import meat3 from '@/6.shared/assets/images/meat-3.svg'
import meat4 from '@/6.shared/assets/images/meat-4.svg'
import perfumery1 from '@/6.shared/assets/images/perfumery-1.svg'
import perfumery2 from '@/6.shared/assets/images/perfumery-2.svg'
import perfumery3 from '@/6.shared/assets/images/perfumery-3.svg'
import perfumery4 from '@/6.shared/assets/images/perfumery-4.svg'

const images: any = {
	eau_de_toilet: perfumery1,
	neutral_fragrance: perfumery2,
	citrus_fragrance: perfumery3,
	floral_fragrance: perfumery4,
	not_fresh_fruits: fruits1,
	ripe_fruits: fruits2,
	fresh_fruits: fruits3,
	seasonal_fruits: fruits4,
	white_bread: bakery1,
	whole_white_bread: bakery2,
	seed_bread: bakery3,
	home_made_bread: bakery4,
	something: fish1,
	canned_fish: fish2,
	fresh_fish: fish3,
	small_shellfish: fish4,
	short_socks: clothing1,
	long_socks: clothing2,
	spy_shoes: clothing3,
	basic_footwear: clothing4,
	dubious_meat: meat1,
	meat: meat2,
	fresh_meat: meat3,
	marbled_meat: meat4
}

export const getImgDepartment = (name: any) => {
	if (name) {
		return images[name]
	} else return ''
}
