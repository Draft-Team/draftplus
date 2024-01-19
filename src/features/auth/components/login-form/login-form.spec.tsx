import { ReactElement } from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LoginForm } from './login-form'

const setup = (jsx: ReactElement) => {
	return {
		user: userEvent.setup(),
		...render(jsx)
	}
}

describe('LoginForm', () => {
	it('should show an error message for incorrect email', async () => {
		const { user } = setup(<LoginForm />)

		const email = screen.getByPlaceholderText('Email')
		const submit = screen.getByRole('button', { name: 'Entrar' })

		await user.type(email, 'zap.com')
		await user.click(submit)

		const errorMessage = await screen.findByText('Precisa ser um email valido')

		expect(errorMessage).toBeInTheDocument()
	})

	it('it should show an error for empty password', async () => {
		const { user } = setup(<LoginForm />)

		const email = screen.getByPlaceholderText('Email')
		const submit = screen.getByRole('button', { name: 'Entrar' })

		await user.type(email, 'zap@dsa.com')
		await user.click(submit)

		const errorMessage = await screen.findByText('Esse campo precisa ser preenchido')

		expect(errorMessage).toBeInTheDocument()
	})
})
