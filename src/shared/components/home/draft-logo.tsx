import Link from 'next/link'

import { placeholderBlurhash } from '@/libs/utils'

import { BlurImage } from '../blur-image'

export const DraftLogo = () => {
	return (
		<Link href='/' className='relative h-6 w-20 overflow-hidden rounded-md'>
			<BlurImage
				className='block h-full w-full dark:hidden'
				src='/draftplus-logo-dark.svg'
				fill
				placeholder='blur'
				blurDataURL={placeholderBlurhash}
				alt='DraftPlus Logo'
			/>
			<BlurImage
				className='hidden h-full w-full dark:block'
				src='/draftplus-logo.svg'
				fill
				placeholder='blur'
				blurDataURL={placeholderBlurhash}
				alt='DraftPlus Logo'
			/>
		</Link>
	)
}
