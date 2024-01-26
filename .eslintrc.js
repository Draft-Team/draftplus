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
			files: ['**/?(*.)+(spec).[jt]s?(x)'],
			extends: [
				'plugin:jest-dom/recommended',
				'plugin:vitest/recommended',
				'plugin:testing-library/react'
			]
		},
		{
			files: ['**/?(*.)+(test).[jt]s?(x)'],
			extends: ['plugin:chai-friendly/recommended', 'plugin:cypress/recommended']
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
	ignorePatterns: [
		'.next',
		'**/.*.js',
		'**/.*.ts',
		'node_modules',
		'**/*.config.ts',
		'**/*.config.js'
	]
}
