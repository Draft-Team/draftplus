describe('Login Form Test', () => {
	it('should login with valid credentials', () => {
		cy.visit('/login')

		cy.get('input[placeholder="Email"]').type('user@email.com')
		cy.get('input[placeholder="Senha"]').type('user-password')

		cy.get('button[type="submit"]').click()

		cy.contains('Login realizado com sucesso').should('be.visible')
	})

	it('should show an error message for incorrect email', () => {
		cy.visit('/login')

		cy.get('input[placeholder="Email"]').type('user@')
		cy.get('input[placeholder="Senha"]').type('user-password')

		cy.get('button[type="submit"]').click()

		cy.contains('Precisa ser um email valido').should('be.visible')
	})

	it('should show an error for empty password', () => {
		cy.visit('/login')

		cy.get('input[placeholder="Email"]').type('user@')

		cy.get('button[type="submit"]').click()

		cy.contains('Esse campo precisa ser preenchido').should('be.visible')
	})

	it('should show an error for invalid credentials', () => {
		cy.visit('/login')

		cy.get('input[placeholder="Email"]').type('zap@email.com')
		cy.get('input[placeholder="Senha"]').type('zap-password')

		cy.get('button[type="submit"]').click()

		cy.contains('Erro ao fazer login').should('be.visible')
	})
})
