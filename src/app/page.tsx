import { cn } from '@/libs/utils'
import { HeroAnimation } from '@/shared/components/hero-animation/hero-animation'
import { ThemeMode } from '@/shared/components/theme-mode'
import { Badge } from '@/shared/ui/badge'
import { buttonVariants } from '@/shared/ui/button'

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
		</>
	)
}
