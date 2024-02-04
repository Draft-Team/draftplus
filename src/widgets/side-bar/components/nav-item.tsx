import { ElementType } from 'react'
import Link from 'next/link'

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	title: string
	icon: ElementType
	href: string
}
export const NavItem = ({ title, icon: Icon, href, ...rest }: NavItemProps) => {
	return (
		<Link
			{...rest}
			href={href}
			className='group flex items-center gap-3 rounded px-3 py-2 hover:bg-primary/10'>
			<Icon className='h-5 w-5' />
			<span className='font-medium group-hover:text-primary'>{title}</span>
		</Link>
	)
}
