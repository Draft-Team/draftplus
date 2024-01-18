import { LockKeyhole, Mail } from 'lucide-react'

import {
	Form,
	FormButton,
	FormGroup,
	FormInputIcon,
	FormLabel
} from '@/shared/components/forms'

export const LoginForm = () => {
	return (
		<Form className='w-full'>
			<section className='mb-11'>
				<h1 className='mb-5 text-[28px] font-bold'>Entrar</h1>
				<p className='font-normal text-gray-600'>Encontre a receita perfeita para você</p>
			</section>
			<div className='flex flex-col gap-6'>
				<FormGroup className='flex flex-col gap-3'>
					<FormLabel>Email</FormLabel>
					<FormInputIcon placeholder='Email' icon={<Mail />} />
				</FormGroup>
				<FormGroup className='flex flex-col gap-3'>
					<FormLabel>Senha</FormLabel>
					<FormInputIcon placeholder='Senha' icon={<LockKeyhole />} />
				</FormGroup>

				<FormButton>Entrar</FormButton>
			</div>
		</Form>
	)
}
