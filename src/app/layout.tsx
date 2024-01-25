import '@/styles/globals.css'

import React from 'react'
import type { Metadata, Viewport } from 'next'

import { env } from '@/environment'
import { lexend } from '@/libs/fonts'
import { cn } from '@/libs/utils'
import { Provider } from '@/providers/main-provider'
import { ThemeProvider } from '@/providers/theme'
import { TailwindIndicator } from '@/shared/components/tailwind-indicator'
import { server } from '@/shared/mocks/setup-handler'
import { Toaster } from '@/shared/ui/sonner'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

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
					<Header />
					<div className='flex-1'>{children}</div>
					<TailwindIndicator />
					<Footer />
					<Toaster />
				</Provider>
			</body>
		</html>
	)
}
