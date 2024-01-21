import { UtensilsCrossed } from 'lucide-react'

import { cn, placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import { HeroAnimation } from '@/shared/components/hero-animation/hero-animation'
import { ThemeMode } from '@/shared/components/theme-mode'
import { Badge } from '@/shared/ui/badge'
import { Button, buttonVariants } from '@/shared/ui/button'

export default async function Page() {
	return (
		<>
			<header className='mb-20 border-b'>
				<nav className='container mx-auto flex h-14 items-center justify-between'>
					<ThemeMode />

					<ul className='flex gap-3'>
						<li>
							<a
								href='https://github.com/matheuspergoli/next-template'
								target='_blank'
								rel='noopener noreferrer'
								className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
								Repository
							</a>
						</li>
						<li>
							<a
								href='https://github.com/matheuspergoli'
								target='_blank'
								rel='noopener noreferrer'
								className={cn(buttonVariants({ variant: 'outline' }), 'font-semibold')}>
								Matheus Pergoli
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className='container mx-auto'>
				<section className='grid grid-cols-1 items-center sm:grid-cols-2'>
					<div className='flex flex-col gap-3 md:gap-4'>
						<Badge className='w-max'>SIMPLES E RAPIDO</Badge>
						<h1 className='max-w-[540px] text-3xl font-medium leading-9 md:text-4xl lg:text-[40px]'>
							Encontre a receita perfeita para você e seu momento
						</h1>
						<p className='max-w-[540px] text-muted-foreground '>
							Explore uma coleção diversificada de pratos irresistíveis e descubra sabores
							feitos sob medida para cada ocasião, do dia a dia a momentos especiais
						</p>
					</div>
					<div className='hidden w-[700px] sm:block'>
						<HeroAnimation />
					</div>
				</section>
			</main>

			<section className='mt-20 border bg-[#141414] '>
				<div className='container mx-auto grid grid-cols-2 items-center '>
					<div className='max-w-[463px]'>
						<h2 className='text-3xl font-semibold'>Descubra nova receitas</h2>
						<p className='mb-8 mt-8 font-medium text-muted-foreground'>
							Explorar novos sabores na cozinha é como desvendar um mundo de
							possibilidades onde a criatividade se torna o tempero principal para
							transformar simples ingredientes em verdadeiras obras de arte culinária
						</p>

						<Button>
							<UtensilsCrossed />
							Ver todas as receitas
						</Button>
					</div>
					<div className='relative h-[348px] max-w-[736px] overflow-hidden rounded-md'>
						<BlurImage
							className='h-full w-full'
							src='/food-cta.jpg'
							fill
							placeholder='blur'
							blurDataURL={placeholderBlurhash}
							alt='DraftPlus Logo'
						/>
					</div>
				</div>
			</section>
		</>
	)
}
