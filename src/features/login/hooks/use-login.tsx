import React from 'react'

import { toast } from 'sonner'

import { isLeft, isRight } from '@/shared/libs/either'

import { signIn } from '../actions'
import { LoginFormData, LoginFormDTO } from '../dtos'

export const useLogin = () => {
	const [isPending, startTransition] = React.useTransition()

	const login = async (data: LoginFormData) => {
		const parsedData = LoginFormDTO.safeParse(data)

		if (!parsedData.success) {
			toast.error('Dados inválidos', {
				description: parsedData.error.message
			})
			return
		}

		const { email, password } = parsedData.data

		startTransition(async () => {
			const response = await signIn({ email, password })

			if (isLeft(response)) {
				toast.error('Erro ao fazer login', {
					description: response.error.message
				})
				return
			}

			if (isRight(response)) {
				toast.success('Login realizado com sucesso', {
					description: response.value.message
				})
			}
		})
	}

	return { isPending, login }
}
