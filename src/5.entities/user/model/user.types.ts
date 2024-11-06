export interface IUser {
	profit: number
	coin: number
}

export interface IRating {
	tg_login: string
	coin: number
}

export interface IRatingResponse {
	users: IRating[]
}

export interface IMyRating extends IRating {
	rank: number
}
