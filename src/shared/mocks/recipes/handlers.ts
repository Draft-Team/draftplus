import { http } from 'msw'

import { env } from '@/environment'

import { recipesResolver } from './resolvers'

const baseURL = env.BACKEND_URL

export const recipeHandlers = [http.post(`${baseURL}/recipes`, recipesResolver)]
