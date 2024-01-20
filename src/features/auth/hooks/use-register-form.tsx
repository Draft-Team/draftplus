import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { RegisterFormData, RegisterFormDTO } from '../dtos'

export const useRegisterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<RegisterFormData>({
		resolver: zodResolver(RegisterFormDTO)
	})

	return { register, handleSubmit, reset, errors }
}
