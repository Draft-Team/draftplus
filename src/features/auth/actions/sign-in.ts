'use server'

import { revalidatePath } from 'next/cache'

import { createAction } from '@/libs/action'
import { isLeft, left, right } from '@/libs/either'
import { createHttpClient } from '@/libs/network'

interface SignInParams {
	email: string
	password: string
}

export const signIn = createAction(async (data: SignInParams) => {
	try {
		const http = createHttpClient()

		const response = await http.post({
			data: {
				email: data.email,
				password: data.password
			},
			url: '/login'
		})

		if (isLeft(response)) {
			return left({
				cause: response.error.error,
				message: 'Failed to sign in'
			})
		}

		revalidatePath('/')

		return right({
			data: response.value.data,
			message: 'Signed in successfully'
		})
	} catch (error) {
		return left({
			cause: error,
			message: 'Failed to sign in'
		})
	}
})
