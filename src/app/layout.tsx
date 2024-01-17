import '@/styles/globals.css'

import React from 'react'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '@/context/theme-provider'
import { Provider } from '@/provider'

export const metadata: Metadata = {
	title: 'Draft Plus',
	description: 'Draft Plus'
}

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<body>
				<Provider providers={[ThemeProvider]}>{children}</Provider>
			</body>
		</html>
	)
}
