'use client'

import { Home, LogOut, Menu } from 'lucide-react'

import { DraftLogo } from '@/shared/components/draft-logo'
import * as sidebar from '@/shared/components/side-bar'
import { Button } from '@/shared/ui/button'

import { NavItem } from './components/nav-item'

export const Sidebar = () => {
	return (
		<sidebar.Root>
			<sidebar.Header>
				<DraftLogo />
				<sidebar.HeaderTrigger>
					<Button variant={'ghost'}>
						<Menu className='h-6 w-6' />
					</Button>
				</sidebar.HeaderTrigger>
			</sidebar.Header>
			<sidebar.Content>
				<nav className='space-y-0.5'>
					<NavItem href='/' icon={Home} title='Inicio' />
					<NavItem href='/' icon={Home} title='Inicio' />
					<NavItem href='/' icon={Home} title='Inicio' />
				</nav>
				<sidebar.ContentFooter>
					<nav className='space-y-0.5'>
						<NavItem href='/' icon={Home} title='Voltar Para Site' />
					</nav>

					<div className='h-px bg-zinc-400' />

					<div className='grid-cols-profile grid items-center gap-3'>
						<picture>
							<img
								src='https://github.com/vitorfre.png'
								alt='profile img'
								className='h-10 w-10 rounded-full'
							/>
						</picture>
						<div className='flex flex-col truncate'>
							<span className='text-sm font-semibold'>Vitor Santos</span>
							<span className='truncate text-sm'>Vitor@vitor.com</span>
						</div>
						<button className='ml-auto rounded-md p-2 hover:bg-primary/5'>
							<LogOut className='h-5 w-5' />
						</button>
					</div>
				</sidebar.ContentFooter>
			</sidebar.Content>
		</sidebar.Root>
	)
}
