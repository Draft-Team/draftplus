import { ElementType, ReactNode } from 'react'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@radix-ui/react-collapsible'
import { ChevronDownIcon } from 'lucide-react'

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	title: string
	icon: ElementType
}

export const NavItemCollapsible = ({ children, title, icon: Icon }: NavProps) => {
	return (
		<Collapsible>
			<CollapsibleTrigger className='group flex w-full items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-primary/10'>
				<div className='flex items-center space-x-2'>
					<Icon className='h-5 w-5' />
					<span className=' group-hover:text-primary'>{title}</span>
				</div>
				<ChevronDownIcon className='ml-auto h-5 group-hover:text-primary/50' />
			</CollapsibleTrigger>
			<CollapsibleContent className='space-y-2 px-2'>{children}</CollapsibleContent>
		</Collapsible>
	)
}
