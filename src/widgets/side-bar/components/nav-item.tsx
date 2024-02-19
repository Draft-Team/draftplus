'use client'

import { ElementType } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/libs/utils'

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	title: string
	icon: ElementType
	href: string
}

export const NavItem = ({ title, icon: Icon, href, ...rest }: NavItemProps) => {
	const pathname = usePathname()
	const isActive = pathname === href.toString()
	return (
		<Link
			{...rest}
			href={href}
			className={cn(
				'group flex items-center gap-3 rounded px-3 py-2 transition-all hover:bg-primary/10',
				{
					'bg-primary hover:bg-transparent': isActive
				}
			)}>
			<Icon className='h-5 w-5' />
			<span className=' group-hover:text-primary'>{title}</span>
		</Link>
	)
}
