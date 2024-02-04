'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { Heart } from 'lucide-react'

import { ActiveLink } from '@/shared/components/active-link'
import { DraftLogo } from '@/shared/components/draft-logo'

import { ButtonLogin } from './button-login'

const dataNav = [
	{
		id: 1,
		title: 'Buscar',
		href: '/buscar'
	},
	{
		id: 2,
		title: 'Inicio',
		href: '/'
	},
	{
		id: 3,
		title: 'Receitas',
		href: '/receitas'
	},
	{
		id: 4,
		title: <Heart />,
		href: '/heart'
	}
]

export const Header = () => {
	const pathname = usePathname()

	if (
		pathname === '/login' ||
		pathname === '/register' ||
		pathname.startsWith('/dashboard')
	) {
		return null
	}

	return (
		<header className='container mx-auto'>
			<div className='flex items-center justify-between pb-20 pt-11'>
				<DraftLogo />
				<nav className='w-fit'>
					<ul className='flex w-full items-center gap-4'>
						{dataNav.map(({ id, title, href }) => (
							<li key={id}>
								<ActiveLink href={href}>{title}</ActiveLink>
							</li>
						))}
						<ButtonLogin href='/login' user />
					</ul>
				</nav>
			</div>
		</header>
	)
}
