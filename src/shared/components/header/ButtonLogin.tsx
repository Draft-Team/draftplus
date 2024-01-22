import React from 'react'
import Link from 'next/link'

import { UserRound } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'

interface ButtonLogin {
	user: boolean
	href: string
}

export const ButtonLogin = ({ user, href }: ButtonLogin) => {
	return (
		<div>
			{!user && (
				<li className='w-full min-w-[150px]'>
					<Link
						className='flex items-center justify-center gap-2 rounded-md bg-[#141414] px-4 py-3 text-sm font-medium'
						href={href}>
						<UserRound className='inline' color='red' />
						FAZER LOGIN
					</Link>
				</li>
			)}
			{user && (
				<Link href={href}>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</Link>
			)}
		</div>
	)
}
