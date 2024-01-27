import { UtensilsCrossed } from 'lucide-react'

import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { HeroAnimation } from '@/widgets/hero-animation'

export default async function Page() {
	return (
		<>
			<main className='container mx-auto'>
				<section className='grid grid-cols-1 items-center md:grid-cols-2'>
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
					<div className='w-max-[700px] hidden md:block'>
						<HeroAnimation />
					</div>
				</section>
			</main>

			<section className='container mx-auto mt-20'>
				<h2 className='text-3xl font-semibold'>Descubra, Crie e Compartilhe</h2>
				<div className='relative mt-16 grid grid-cols-1 justify-between gap-4 lg:grid-cols-2'>
					<div>
						<figure className='relative h-[300px] overflow-hidden rounded-md lg:h-[400px]  lg:max-w-[586px]'>
							<BlurImage
								className='h-full w-full object-fill'
								src='/chef.jpg'
								fill
								placeholder='blur'
								blurDataURL={placeholderBlurhash}
								alt='DraftPlus Logo'
							/>
						</figure>
					</div>
					<div>
						<span className='text-3xl font-semibold'>Compartilhe suas receitas</span>
						<p className='mt-2 max-w-[361px] font-medium text-muted-foreground'>
							De forma simples e rápida você compartilha suas receitas
						</p>

						<div className='mt-6 flex  flex-col gap-4'>
							<div className='flex items-center gap-4'>
								<div className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-3 text-center text-primary shadow-lg'>
									<span className='text-2xl font-semibold'>1</span>
								</div>
								<p>Crie uma conta</p>
							</div>
							<hr className='h-1' />
							<div className='flex items-center gap-4'>
								<div className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-3 text-center text-primary shadow-lg'>
									<span className='text-2xl font-semibold'>2</span>
								</div>
								<p>Crie uma receita</p>
							</div>
							<hr className='h-1' />
							<div className='flex items-center gap-4'>
								<div className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 p-3 text-center text-primary shadow-lg'>
									<span className='text-2xl font-semibold'>3</span>
								</div>
								<p>Publique</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='mt-20 border-y bg-[url("/food-cta.jpg")] bg-cover bg-no-repeat bg-blend-overlay dark:bg-[#333]  md:bg-none dark:md:bg-[#141414]'>
				<div className='container mx-auto grid grid-cols-1 items-center md:grid-cols-2 md:pr-0'>
					<div className='max-w-[463px] py-7 md:py-0'>
						<h3 className='text-3xl font-semibold'>Descubra nova receitas</h3>
						<p className='mb-8 mt-8 font-medium text-muted-foreground'>
							Explorar novos sabores na cozinha é como desvendar um mundo de
							possibilidades onde a criatividade se torna o tempero principal para
							transformar simples ingredientes em verdadeiras obras de arte culinária
						</p>

						<Button className='flex gap-4'>
							<UtensilsCrossed />
							Ver todas as receitass
						</Button>
					</div>
					<figure className='relative hidden h-[348px] max-w-[736px] overflow-hidden rounded-md md:block'>
						<BlurImage
							className='h-full w-full'
							src='/food-cta.jpg'
							fill
							placeholder='blur'
							blurDataURL={placeholderBlurhash}
							alt='DraftPlus Logo'
						/>
					</figure>
				</div>
			</section>
		</>
	)
}
