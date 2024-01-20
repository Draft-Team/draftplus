const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: [
				'plugin:testing-library/react',
				'plugin:jest-dom/recommended',
				'plugin:vitest/recommended'
			]
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project
	},
	env: {
		node: true
	},
	globals: {
		JSX: 'writable',
		React: 'writable'
	},
	settings: {
		react: {
			version: 'detect'
		},
		tailwindcss: {
			callees: ['cn'],
			config: 'tailwind.config.js'
		}
	},
	rules: {
		'react/prop-types': 'off'
	},
	ignorePatterns: ['**/*.config.ts', '**/*.config.js', 'node_modules', '.next']
}
