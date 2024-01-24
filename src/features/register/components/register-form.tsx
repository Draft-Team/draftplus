'use client'

import { LockKeyhole, Mail, UserRound } from 'lucide-react'

import {
	Form,
	FormButton,
	FormGroup,
	FormInputIcon,
	FormLabel
} from '@/shared/components/forms'

import { RegisterFormData } from '../dtos'
import { useRegisterForm } from '../hooks'

export const RegisterForm = () => {
	const { errors, handleSubmit, register } = useRegisterForm()

	const onSubmit = async (data: RegisterFormData) => {
		console.log(data)
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className='w-full'>
			<section className='mb-11'>
				<h1 className='mb-5 text-[28px] font-bold'>Cadastre-se</h1>
				<p className='font-normal text-muted-foreground'>
					Encontre a receita perfeita para você
				</p>
			</section>
			<div className='flex flex-col gap-6'>
				<FormGroup className='flex flex-col gap-3'>
					<FormLabel htmlFor='name'>Nome</FormLabel>
					<FormInputIcon
						type='name'
						id='name'
						placeholder='Nome'
						icon={<UserRound />}
						{...register('name')}
					/>
					{errors.name && <span className='text-red-500'>{errors.name.message}</span>}
				</FormGroup>
				<FormGroup className='flex flex-col gap-3'>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<FormInputIcon
						type='text'
						id='email'
						placeholder='Email'
						icon={<Mail />}
						{...register('email')}
					/>
					{errors.email && <span className='text-red-500'>{errors.email.message}</span>}
				</FormGroup>
				<FormGroup className='flex flex-col gap-3'>
					<FormLabel htmlFor='password'>Senha</FormLabel>
					<FormInputIcon
						type='text'
						id='password'
						placeholder='Senha'
						icon={<LockKeyhole />}
						{...register('password')}
					/>
					{errors.password && (
						<span className='text-red-500'>{errors.password.message}</span>
					)}
				</FormGroup>

				<FormButton>Cadastrar</FormButton>
			</div>
		</Form>
	)
}
