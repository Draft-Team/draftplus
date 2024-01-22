'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ChevronsUp } from 'lucide-react'

import { Button } from '@/shared/ui/button'

import { Logo } from '../logo/Logo'

export const Footer = () => {
	const pathname = usePathname()

	if (pathname === '/login' || pathname === '/register') {
		return null
	}

	return (
		<footer className='container mx-auto mt-28'>
			<div className='flex flex-col justify-between gap-7 sm:flex-row sm:gap-0'>
				<div className='flex flex-col items-center gap-4 sm:items-start'>
					<Logo />

					<p className='text-muted-foreground'>Encontre o prato perfeito para você</p>
				</div>
				<nav className='flex flex-col items-center gap-16 sm:flex-row sm:items-start'>
					<div className='flex flex-col items-center gap-4 sm:items-start'>
						<span className='font-semibold'>LINKS</span>
						<Link
							className='text-muted-foreground hover:text-white/70'
							href={'/receitas'}>
							Receitas
						</Link>
					</div>
					<div className='flex flex-col items-center gap-4 sm:items-start'>
						<span className='font-semibold'>LEGAL</span>
						<Link
							className='text-muted-foreground hover:text-white/70'
							href={'/receitas'}>
							Termos de uso
						</Link>
						<Link
							className='text-muted-foreground hover:text-white/70'
							href={'/receitas'}>
							Politica de privacidade
						</Link>
						<Link
							className='text-muted-foreground hover:text-white/70'
							href={'/receitas'}>
							Politica de Cookies
						</Link>
					</div>
				</nav>
			</div>
			<hr className='mb-6 mt-16 h-1 w-full text-muted-foreground' />
			<div className='mb-4 flex flex-col-reverse items-center sm:flex-row sm:justify-between'>
				<span className='text-center dark:text-white/80 sm:text-start'>
					© 2024 Draftplus Inc. All rights reserved.
				</span>
				<Button asChild className='w-min' variant={'link'}>
					<Link href={'/receitas'}>
						Voltar para o topo <ChevronsUp className='text-white' />
					</Link>
				</Button>
			</div>
		</footer>
	)
}
