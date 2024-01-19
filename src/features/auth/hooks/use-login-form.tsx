import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { LoginFormData, LoginFormDTO } from '../dtos'

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<LoginFormData>({
		resolver: zodResolver(LoginFormDTO)
	})

	return { register, handleSubmit, reset, errors }
}
