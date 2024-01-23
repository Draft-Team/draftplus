import React from 'react'
import Link from 'next/link'

import { ChevronLeft } from 'lucide-react'

import { RegisterForm } from '@/features/register/components'
import { BlurImage } from '@/shared/components/blur-image'
import { placeholderBlurhash } from '@/shared/libs/utils'

export default function Page() {
	return (
		<main className='grid grid-cols-1 lg:grid-cols-2'>
			<figure className='hidden h-screen items-center justify-center bg-auth bg-cover bg-no-repeat lg:flex'>
				<Link href='/'>
					<div className='relative h-9 w-32 overflow-hidden rounded-md'>
						<BlurImage
							className='h-full w-full'
							src='/draft+.svg'
							fill
							placeholder='blur'
							blurDataURL={placeholderBlurhash}
							alt='DraftPlus Logo'
						/>
					</div>
				</Link>
			</figure>
			<Link className='absolute left-[51%] top-5 flex text-white' href='/'>
				<ChevronLeft className='pr-1' />
				<p>Voltar</p>
			</Link>
			<Link
				className='absolute right-5 top-5 flex gap-4 font-medium text-primary'
				href='/login'>
				Entrar
			</Link>
			<section className='mx-auto flex h-screen w-full max-w-[444px] items-center justify-center px-2 lg:px-0'>
				<RegisterForm />
			</section>
		</main>
	)
}
