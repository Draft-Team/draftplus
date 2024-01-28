import { http } from 'msw'

import { env } from '@/environment'

import { popularRecipesResolver } from './resolvers'

const baseURL = env.BACKEND_URL

export const popularRecipeHandlers = [
	http.get(`${baseURL}/popular-recipes`, popularRecipesResolver)
]
