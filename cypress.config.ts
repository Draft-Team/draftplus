import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		specPattern: '**/*.test.tsx',
		baseUrl: 'http://localhost:3000'
	}
})
