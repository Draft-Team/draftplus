import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Textarea } from '@/shared/ui/textarea'

import { HeroAnimation } from '../hero-animation'

export const Bento = () => {
	return (
		<section className='container mx-auto space-y-8'>
			<h2 className='mt-20 text-4xl font-semibold'>Descubra, Crie e Compartilhe</h2>
			<div className='grid grid-cols-2 gap-4'>
				{/* Bento 01 */}
				<div className='group grid h-[340px] grid-cols-2 items-center gap-4 rounded-md  p-6 shadow-md duration-500 hover:bg-black dark:bg-black dark:hover:bg-white'>
					<div>
						<span className='border-l-[4px] border-primary pl-3 text-2xl font-medium group-hover:text-white dark:group-hover:text-black'>
							Crie
						</span>
						<p className='mb-6 mt-3 hidden font-medium group-hover:block group-hover:text-white/90 dark:group-hover:text-black/80'>
							Liberte sua criatividade na cozinha e transforme ingredientes em
							obras-primas culinárias que encantam o paladar
						</p>
						<Button className='hidden group-hover:block' variant={'link'}>
							Compartilhe
						</Button>
					</div>
					<div className='flex flex-col gap-3'>
						<div>
							<Label className='group-hover:text-white dark:group-hover:text-black'>
								Nome do prato
							</Label>
							<Input
								className='group-hover:text-white/80 dark:group-hover:text-gray-600'
								value={'Pizza Hawaiana'}
							/>
						</div>
						<div>
							<Label className='group-hover:text-white dark:group-hover:text-black'>
								Nome do prato
							</Label>
							<Textarea
								rows={5}
								className='resize-none group-hover:text-white/80 dark:group-hover:text-gray-600'
								value={
									'Uma mistura deliciosa de fatias de presunto suculento e pedaços de abacaxi fresco, tudo isso coberto por queijo derretido, servido sobre uma base de massa crocante'
								}
							/>
						</div>
						<Button>Publicar receita</Button>
					</div>
				</div>
				{/* Bento 02 */}
				<div className='group h-[340px] flex-col  gap-4 rounded-md  p-6 shadow-md duration-500 dark:bg-black'>
					<span className='border-l-[4px] border-primary pl-3 text-2xl font-medium '>
						Encontre
					</span>
					<HeroAnimation />
				</div>
				{/* Bento 03 */}
				<div className='group h-[340px] flex-col gap-4 overflow-hidden rounded-md  p-6 shadow-md duration-500 dark:bg-black'>
					<span className='border-l-[4px] border-primary pl-3 text-2xl font-medium '>
						Uma Receita para Cada Momento
					</span>

					<div className='scene flex h-full justify-between'>
						<div className='flex h-full flex-col justify-between'>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
						</div>
						<div className='flex h-full flex-col justify-evenly'>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
						</div>
						<div className='flex h-full flex-col justify-between'>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
						</div>
						<div className='flex h-full flex-col justify-evenly'>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
							<figure className='relative h-16 w-16 rounded-full border-[2px] bg-black transition-all hover:scale-[1.325]'>
								<BlurImage
									className='h-full w-full rounded-full'
									src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='.'
								/>
							</figure>
						</div>
					</div>
				</div>
				{/* Bento 04 */}
				<div className='group h-[340px] flex-col  gap-4 rounded-md  p-6 shadow-md duration-500 dark:bg-black'>
					das
				</div>
			</div>
		</section>
	)
}
