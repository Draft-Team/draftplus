import { ComponentProps, ReactNode } from 'react'

interface RecipeCardRootProps extends ComponentProps<'div'> {
	children: ReactNode
}
export const Root = ({ children, ...rest }: RecipeCardRootProps) => {
	return (
		<div {...rest} className='rounded-lg border bg-white shadow-md dark:bg-[#141414]'>
			{children}
		</div>
	)
}
interface RecipeImageProps extends ComponentProps<'div'> {
	children: ReactNode
}
export const Banner = ({ children, ...rest }: RecipeImageProps) => {
	return (
		<div className='relative' {...rest}>
			{children}
		</div>
	)
}

interface ContentProps extends ComponentProps<'div'> {
	children: ReactNode
}
export const Content = ({ children, ...rest }: ContentProps) => {
	return (
		<div className='p-5' {...rest}>
			{children}
		</div>
	)
}

interface FooterProps extends ComponentProps<'div'> {
	children: ReactNode
}
export const Footer = ({ children, ...rest }: FooterProps) => {
	return (
		<div {...rest} className='flex justify-end gap-4 px-5 pb-5'>
			{children}
		</div>
	)
}
