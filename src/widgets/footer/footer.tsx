'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ChevronsUp } from 'lucide-react'

import { DraftLogo } from '@/shared/components/draft-logo'
import { ThemeMode } from '@/shared/components/theme-mode'
import { Button } from '@/shared/ui/button'

export const Footer = () => {
	const pathname = usePathname()

	if (pathname === '/login' || pathname === '/register') {
		return null
	}

	function backToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const footerSections = {
		sections: [
			{
				title: 'LINKS',
				items: [
					{
						title: 'Receitas',
						url: '/receitas'
					}
				]
			},
			{
				title: 'LEGAL',
				items: [
					{
						title: 'Termos de uso',
						url: '/termos-de-uso'
					},
					{
						title: 'Política de privacidade',
						url: '/politica-de-privacidade'
					},
					{
						title: 'Política de Cookies',
						url: '/politica-de-cookies'
					}
				]
			}
		]
	}

	return (
		<footer className='container mx-auto mt-28'>
			<div className='flex flex-col justify-between gap-7 sm:flex-row sm:gap-0'>
				<div className='flex flex-col items-center gap-4 sm:items-start'>
					<DraftLogo />
					<p className='text-muted-foreground'>Encontre o prato perfeito para você</p>
				</div>
				<nav className='flex flex-col items-center gap-16 sm:flex-row sm:items-start'>
					{footerSections.sections.map((section) => (
						<div
							key={section.title}
							className='flex flex-col items-center gap-4 sm:items-start'>
							<span className='font-semibold'>{section.title}</span>
							{section.items.map((item) => (
								<Link
									key={item.title}
									className='text-muted-foreground hover:text-white/70'
									href={item.url}>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</nav>
			</div>
			<hr className='mb-6 mt-16 h-1 w-full text-muted-foreground' />
			<div className='mb-4 flex flex-col-reverse items-center sm:flex-row sm:justify-between'>
				<span className='text-center dark:text-white/80 sm:text-start'>
					© 2024 Draftplus Inc. All rights reserved.
				</span>
				<div className='flex gap-2'>
					<Button onClick={backToTop} className='w-min' variant={'link'}>
						Voltar para o topo <ChevronsUp className='text-white' />
					</Button>
					<ThemeMode />
				</div>
			</div>
		</footer>
	)
}
