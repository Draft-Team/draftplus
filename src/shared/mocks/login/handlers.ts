import { http } from 'msw'

import { env } from '@/shared/environment'

import { loginResolver } from './resolvers'

const baseURL = env.BACKEND_URL

export const loginHandlers = [http.post(`${baseURL}/login`, loginResolver)]
