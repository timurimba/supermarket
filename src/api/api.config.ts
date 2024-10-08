import axios, { CreateAxiosDefaults } from 'axios'

const config: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'tma-data': 384432527,
		'Content-Type': 'application/json'
	}
}

export const instance = axios.create(config)
