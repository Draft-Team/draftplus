import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@radix-ui/react-collapsible'
import { CheckSquare, ChevronDownIcon, HomeIcon, User } from 'lucide-react'

import { NavItem } from './nav-item'

export const NavItemCollapsible = () => {
	return (
		<Collapsible>
			<CollapsibleTrigger className='group flex w-full items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-primary/10'>
				<div className='flex items-center space-x-2'>
					<HomeIcon className='h-5 w-5' />
					<span className='font-medium group-hover:text-primary'>Home</span>
				</div>
				<ChevronDownIcon className='ml-auto h-5 group-hover:text-primary/50' />
			</CollapsibleTrigger>
			<CollapsibleContent className='space-y-2 px-2'>
				<NavItem href='/' title='Tasks' icon={CheckSquare} />
				<NavItem href='/' title='Users' icon={User} />
			</CollapsibleContent>
		</Collapsible>
	)
}
