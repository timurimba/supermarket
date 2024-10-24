export interface IRating {
	tg_login: string
	coin: number
}

export interface IRatingResponse {
	users: IRating[]
}
