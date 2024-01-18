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

interface FormsProps {
	path?: string
}

export const Forms = ({ path }: FormsProps) => {
	return (
		<form className='m-auto w-full max-w-[380px] xl:max-w-[443px]' action=''>
			<h3 className='mb-5 text-center text-[1.75rem] font-bold lg:text-start'>
				{path === 'login' ? 'Entrar' : 'Cadastre-se'}
			</h3>
			<p className='mb-11 text-center text-[#A1A1AACC] lg:text-start'>
				Encontre a receita perfeita para você
			</p>

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

				<button className='h-[36px] w-full rounded-md bg-white font-medium text-[#0F172A] transition-all duration-300 hover:border hover:bg-[#E8EDF3] hover:text-black'>
					Entrar
				</button>

				<div className='flex w-full items-center justify-center'>
					<span className='h-0.5 w-full bg-[#E3E3E31A]'></span>
					<p className='min-w-[150px] text-center text-xs text-[#E3E3E3]'>
						ou continue com
					</p>
					<span className='h-0.5 w-full bg-[#E3E3E31A]'></span>
				</div>

				<button className='flex h-[36px] w-full items-center justify-center gap-4 rounded-md bg-white font-medium text-[#0F172A] transition-all duration-300 hover:border hover:bg-[#E8EDF3]'>
					<GitHubLogoIcon />
					Github
				</button>
			</div>
		</form>
	)
}
