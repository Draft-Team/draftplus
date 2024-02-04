import { ComponentProps, ReactNode } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}
export const Root = ({ children, ...rest }: RootProps) => {
	return (
		<Collapsible.Root
			{...rest}
			className='fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b bg-background data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0'>
			{children}
		</Collapsible.Root>
	)
}

interface HeaderProps extends ComponentProps<'div'> {
	children: ReactNode
}
export const Header = ({ children, ...rest }: HeaderProps) => {
	return (
		<div {...rest} className='flex items-center justify-between'>
			{children}
		</div>
	)
}

interface HeaderTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}
export const HeaderTrigger = ({ children, ...rest }: HeaderTriggerProps) => {
	return (
		<Collapsible.Trigger {...rest} asChild className='lg:hidden'>
			{children}
		</Collapsible.Trigger>
	)
}

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}
export const Content = ({ children, ...rest }: ContentProps) => {
	return (
		<Collapsible.Content
			{...rest}
			forceMount
			className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'>
			{children}
		</Collapsible.Content>
	)
}

interface ContentFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}
export const ContentFooter = ({ children, ...rest }: ContentFooterProps) => {
	return (
		<div {...rest} className='mt-auto flex flex-col gap-6'>
			{children}
		</div>
	)
}
