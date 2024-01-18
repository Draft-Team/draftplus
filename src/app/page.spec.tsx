import { act } from 'react-dom/test-utils'

import { render, screen } from '@testing-library/react'

import Page from '@/app/page'

describe('Page', () => {
	it('Should renders the heading level 1', async () => {
		await act(async () => {
			render(await Page())
		})

		const heading = screen.getByRole('heading', { level: 1 })

		expect(heading).toBeInTheDocument()
	})
})
