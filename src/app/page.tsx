import { UtensilsCrossed } from 'lucide-react'

import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import { Header } from '@/shared/components/header/Header'
import { HeroAnimation } from '@/shared/components/hero-animation/hero-animation'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'

export default async function Page() {
	return (
		<>
			<main className='container mx-auto'>
				<Header />
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

			<section className='mt-20 border-y bg-[url("/food-cta.jpg")] bg-cover bg-no-repeat bg-blend-overlay dark:bg-[#333]  md:bg-none dark:md:bg-[#141414]'>
				<div className='container mx-auto grid grid-cols-1 items-center md:grid-cols-2 md:pr-0'>
					<div className='max-w-[463px] py-7 md:py-0'>
						<h2 className='text-3xl font-semibold'>Descubra nova receitas</h2>
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
