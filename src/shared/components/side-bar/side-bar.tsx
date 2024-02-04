import { ComponentProps, ReactNode } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}
/**
 * Componente root para a side-bar.
 *
 * @remarks
 * - Abriga todos os outros componentes da side-bar.
 * - Utiliza `Collapsible.Root` do Radix UI.
 *
 * @example
 * <Sidebar.Root>
 *   <Sidebar.Header>
 *      Logo ou outra coisa
 *     <sidebar.HeaderTrigger>
 *       Botao
 *     </sidebar.HeaderTrigger>
 *   </Sidebar.Header>
 *   <Sidebar.Content>
 *     <NavItem href='/dashboard' icon={Home} title='Inicio' />
 *     <Sidebar.ContentFooter>Footer</Sidebar.ContentFooter>
 *   </Sidebar.Content>
 * </Sidebar.Root>
 */
export const Root = ({ children, ...rest }: RootProps) => {
	return (
		<Collapsible.Root
			{...rest}
			className='fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b bg-background px-2 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0'>
			{children}
		</Collapsible.Root>
	)
}

interface HeaderProps extends ComponentProps<'div'> {
	children: ReactNode
}
/**
 * Componente de Header para a barra side-bar.
 *
 * @remarks
 * - Geralmente contém a Logo e um gatilho para abrir/fechar a side-bar.
 * - Deve conter um componente `HeaderTrigger` como filho direto.
 *
 * @example
 * <Sidebar.Header>
 *   Sua Logo ou algo do tipo
 *   <Sidebar.HeaderTrigger>
 *     Botao
 *   </Sidebar.HeaderTrigger>
 * </Sidebar.Header>
 */
export const Header = ({ children, ...rest }: HeaderProps) => {
	return (
		<div {...rest} className='flex items-center justify-between py-2 lg:py-0'>
			{children}
		</div>
	)
}

interface HeaderTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}
/**
 * Componente de gatilho para fechar/abrir a side-bar.
 *
 * @remarks
 * - **Deve ser usado como filho direto do componente de Header.**
 * - Utiliza `Collapsible.Trigger` do Radix UI.
 *
 * @example
 * <Sidebar.HeaderTrigger>
 *   <Button>...</Button>
 * </Sidebar.HeaderTrigger>
 */
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
/**
 * Área de conteúdo principal da side-bar.
 *
 * @remarks
 * - Contém o conteúdo recolhível da barra lateral.
 * - Utiliza `Collapsible.Content` do Radix UI.
 *
 * @example
 * <Sidebar.Content>
 *   <nav>...</nav>
 *   <Sidebar.ContentFooter>...</Sidebar.ContentFooter>
 * </Sidebar.Content>
 */
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
/**
 * Seção de Footer do conteúdo da side-bar.
 *
 * @remarks
 * - Geralmente contém links adicionais ou informações do perfil do usuário.
 * - Deve ser um filho direto do componente Content e posicionado no final.
 *
 * @example
 * <Sidebar.ContentFooter>
 *    Profile/Logout etc
 * </Sidebar.ContentFooter>
 */
export const ContentFooter = ({ children, ...rest }: ContentFooterProps) => {
	return (
		<div {...rest} className='mt-auto flex flex-col gap-6 pb-4'>
			{children}
		</div>
	)
}
