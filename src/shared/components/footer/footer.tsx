import Link from 'next/link'

import { ChevronsUp } from 'lucide-react'

import { placeholderBlurhash } from '@/libs/utils'
import { Button } from '@/shared/ui/button'

import { BlurImage } from '../blur-image'

export const Footer = () => {
	return (
		<footer className='container mx-auto'>
			<div className='flex flex-col justify-between gap-7  sm:flex-row sm:gap-0'>
				<div className='flex flex-col items-center gap-4 sm:items-start'>
					<Link href='/' className='relative h-6 w-20 overflow-hidden rounded-md'>
						<BlurImage
							className='h-full w-full'
							src='/draftplus-logo.svg'
							fill
							placeholder='blur'
							blurDataURL={placeholderBlurhash}
							alt='DraftPlus Logo'
						/>
					</Link>

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
				<span className='text-center text-white/80 sm:text-start'>
					© 2024 Draftplus Inc. All rights reserved.
				</span>
				<Button className='w-min' variant={'link'}>
					Voltar para o topo <ChevronsUp className='text-white' />
				</Button>
			</div>
		</footer>
	)
}
