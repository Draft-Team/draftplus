import { ReactElement } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RegisterForm } from './register-form'

const setup = (jsx: ReactElement) => {
	return {
		user: userEvent.setup(),
		...render(jsx)
	}
}

describe('RegisterForm', () => {
	it('should show an error message for incorrect email', async () => {
		const { user } = setup(<RegisterForm />)

		const email = screen.getByPlaceholderText('Email')
		const submit = screen.getByRole('button', { name: 'Cadastrar' })

		await user.type(email, 'zap.com')
		await user.click(submit)

		const errorMessage = await screen.findByText('Precisa ser um email valido')

		expect(errorMessage).toBeInTheDocument()
	})

	it('it should show an error for empty password', async () => {
		const { user } = setup(<RegisterForm />)

		const password = screen.getByPlaceholderText('Senha')
		const submit = screen.getByRole('button', { name: 'Cadastrar' })

		await user.type(password, '12345678')
		await user.click(submit)

		const errorMessage = await screen.findByText(
			'A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial'
		)

		expect(errorMessage).toBeInTheDocument()
	})
})
