import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/*.spec.{ts,tsx}'],
		setupFiles: ['./vitest.setup.ts']
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
	}
})
