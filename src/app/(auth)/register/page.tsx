import React from 'react'
import Link from 'next/link'

import { RegisterForm } from '@/features/auth/components/register-form'
import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'

export default function Page() {
	return (
		<main className='grid grid-cols-1 lg:grid-cols-2'>
			<figure className='hidden h-screen items-center justify-center bg-auth bg-cover bg-no-repeat lg:flex'>
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
			</figure>
			<Link className='absolute right-5 top-5 font-medium text-primary' href='/login'>
				Entrar
			</Link>
			<section className='mx-auto flex h-screen w-full max-w-[444px] items-center justify-center px-2 lg:px-0'>
				<RegisterForm />
			</section>
		</main>
	)
}
