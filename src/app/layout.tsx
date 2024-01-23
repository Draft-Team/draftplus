import '@/styles/globals.css'

import React from 'react'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '@/features/theme/theme-provider'
import { Provider } from '@/provider'
import { Footer } from '@/shared/components/footer'
import { TailwindIndicator } from '@/shared/components/tailwind-indicator'
import { env } from '@/shared/environment'
import { lexend } from '@/shared/libs/fonts'
import { cn } from '@/shared/libs/utils'
import { server } from '@/shared/mocks/setup-handler'
import { Toaster } from '@/shared/ui/sonner'

export const metadata: Metadata = {
	title: 'Draft Plus',
	description: 'Draft Plus',
	icons: [
		{
			url: '/icon-light.jpg',
			media: '(prefers-color-scheme: light)'
		},
		{
			url: '/icon.jpg',
			media: '(prefers-color-scheme: dark)'
		}
	]
}

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width'
}

function enableMock() {
	if (env.NODE_ENV === 'development' && typeof window === 'undefined') {
		server.listen()
	}
}
enableMock()

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<body className={cn('flex h-screen flex-col font-sans', lexend.variable)}>
				<Provider providers={[ThemeProvider]}>
					<div className='flex-1'>{children}</div>
					<TailwindIndicator />
					<Footer />
					<Toaster />
				</Provider>
			</body>
		</html>
	)
}
