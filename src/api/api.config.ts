import axios, { CreateAxiosDefaults } from 'axios'

const config: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'tma-data': window.Telegram.WebApp.initData,
		'Content-Type': 'application/json'
	}
}

export const instance = axios.create(config)
