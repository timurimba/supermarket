import { retrieveLaunchParams } from '@telegram-apps/sdk'
import axios, { CreateAxiosDefaults } from 'axios'

const { initDataRaw } = retrieveLaunchParams()

const config: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'tma-data': initDataRaw,
		'Content-Type': 'application/json'
	}
}

export const instance = axios.create(config)
