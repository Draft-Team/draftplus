import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Forms } from '@/shared/components/forms/Forms'

import bgAuth from '../../../../public/background/bg-auth.png'
import logo from '../../../../public/logo/draft+.svg'

const page = () => {
	return (
		<div className='flex h-screen items-center justify-center px-4 lg:px-0'>
			<div className='relative hidden lg:block lg:basis-2/4'>
				<Image
					className='relative z-0 h-screen w-full'
					quality={100}
					src={bgAuth}
					alt='background login and register'
				/>
				<Image
					className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
					quality={100}
					src={logo}
					alt='background login and register'
				/>
			</div>
			<Link
				className='absolute right-6 top-[3%] font-medium text-[#C30A11]'
				href='/register'>
				Cadastra-se
			</Link>
			<Forms path='login' />
		</div>
	)
}

export default page
