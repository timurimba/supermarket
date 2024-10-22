export interface IRating {
	tg_login: string
	profit: number
}

export interface IRatingResponse {
	users: IRating[]
}
