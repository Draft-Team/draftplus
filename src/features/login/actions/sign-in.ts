'use server'

import { createAction } from '@/libs/action'
import { isLeft, left, right } from '@/libs/either'
import { createHttpClient } from '@/libs/network'

interface SignInParams {
	email: string
	password: string
}

interface LoginResponse {
	accessToken: {
		id: string
		name: string
		email: string
	}
}

export const signIn = createAction(async (data: SignInParams) => {
	try {
		const http = createHttpClient()

		const response = await http.post<LoginResponse>({
			data: {
				email: data.email,
				password: data.password
			},
			url: '/login'
		})

		if (isLeft(response)) {
			return left({
				cause: `Error with code ${response.error.status}`,
				message: 'Dados inválidos'
			})
		}

		return right({
			data: response.value.data,
			message: `Bem vindo(a) ${response.value.data.accessToken.name}`
		})
	} catch (error) {
		return left({
			cause: error,
			message: 'Dados inválidos'
		})
	}
})
