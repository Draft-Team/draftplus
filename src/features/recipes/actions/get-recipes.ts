'use server'

import { createAction } from '@/libs/action'
import { isLeft, left, right } from '@/libs/either'
import { createHttpClient } from '@/libs/network'

interface Recipe {
	id: number
	imageSrc: string
	title: string
	description: string
	cookTime: number
	servingSize: number
	favoriteCount: number
}

interface RecipesResponse {
	recipes: Recipe[]
}

export const getRecipes = createAction(async () => {
	try {
		const http = createHttpClient()

		const response = await http.post<RecipesResponse>({
			url: '/recipes'
		})

		if (isLeft(response)) {
			return left({
				cause: `Error with code ${response.error.status}`,
				message: 'Dados inválidos'
			})
		}

		return right({
			data: response.value.data,
			message: `Bem vindo(a)`
		})
	} catch (error) {
		return left({
			cause: error,
			message: 'Dados inválidos'
		})
	}
})
