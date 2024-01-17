import { env } from '@/environment/env'
import { createHttpClient } from '@/libs/network'

export const api = createHttpClient({
	baseURL: env.BACKEND_URL
})
