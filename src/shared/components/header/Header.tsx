import React from 'react'

import { Heart } from 'lucide-react'

import { ActiveLink } from '../active-link'
import { Logo } from '../logo/Logo'
import { ButtonLogin } from './ButtonLogin'

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
		title: 'Receita',
		href: '/receita'
	},
	{
		id: 4,
		title: <Heart />,
		href: '/heart'
	}
]

export const Header = () => {
	return (
		<header className='flex items-center justify-between pb-20 pt-11'>
			<Logo />
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
		</header>
	)
}
