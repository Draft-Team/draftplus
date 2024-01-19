import React from 'react'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { LockKeyhole, Mail, UserRound } from 'lucide-react'

import { cn } from '@/libs/utils'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'

interface InputIconProps {
	label: string
	placeholder: string
	icon?: React.ReactNode
	type?: string
	className?: string
}

interface ButtonProps {
	content: string
	className?: string
	icon?: React.ReactNode
}

interface FormsProps {
	path?: string
}

const InputIcon = ({ icon, label, placeholder, className, type }: InputIconProps) => {
	return (
		<div className='space-y-2 font-medium'>
			<Label className='text-[14px]' htmlFor={label}>
				{label}
			</Label>
			<Label
				className={cn(
					'relative flex h-[36px] w-full items-center rounded-[6px] border border-[#27272A]',
					className
				)}
				htmlFor={label}>
				<span className='relative z-10 my-auto px-3'>{icon}</span>
				<Input
					className='absolute z-0 h-full w-full border-none px-12 placeholder:font-normal'
					id={label}
					type={type}
					placeholder={placeholder}
				/>
			</Label>
		</div>
	)
}

const Button = ({ content, className, icon }: ButtonProps) => {
	return (
		<button
			className={cn(
				'flex h-[36px] w-full items-center justify-center gap-4 rounded-md bg-white font-medium text-[#0F172A] transition-all duration-300 hover:border hover:bg-[#E8EDF3]',
				className
			)}>
			<span className='scale-[140%]'>{icon}</span>
			{content}
		</button>
	)
}

export const Forms = ({ path }: FormsProps) => {
	return (
		<form className='m-auto w-full max-w-[380px] xl:max-w-[443px]'>
			<div className='mb-11 space-y-5 text-center lg:text-start'>
				<h3 className='text-[1.75rem] font-bold'>
					{path === 'login' ? 'Entrar' : 'Cadastre-se'}
				</h3>
				<p className='text-[#A1A1AACC]'>Encontre a receita perfeita para você</p>
			</div>

			<div className='space-y-6'>
				{path === 'register' && (
					<InputIcon label='Nome' placeholder='Nome' icon={<UserRound />} />
				)}

				<InputIcon type='email' label='Email' placeholder='Email' icon={<Mail />} />

				<InputIcon
					type='password'
					label='Senha'
					placeholder='Senha'
					icon={<LockKeyhole />}
				/>

				<Button content='Entrar' />

				<div className='flex w-full items-center justify-center'>
					<hr className='border-t-0.5 w-full border-[#E3E3E3] opacity-25' />
					<p className='min-w-[150px] text-center text-xs text-[#E3E3E3]'>
						ou continue com
					</p>
					<hr className='border-t-0.5 w-full border-[#E3E3E3] opacity-25' />
				</div>

				<Button content='GitHub' icon={<GitHubLogoIcon />} />
			</div>
		</form>
	)
}
