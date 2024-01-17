import '@/styles/globals.css'

import React from 'react'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '@/context/theme-provider'
import { lexend } from '@/libs/fonts'
import { cn } from '@/libs/utils'
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
			<body className={cn('font-sans', lexend.variable)}>
				<Provider providers={[ThemeProvider]}>{children}</Provider>
			</body>
		</html>
	)
}
