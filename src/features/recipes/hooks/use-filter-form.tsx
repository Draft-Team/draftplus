import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { FilterFormData, FilterFormDTO } from '../dtos'

export const useFilterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors }
	} = useForm<FilterFormData>({
		resolver: zodResolver(FilterFormDTO)
	})

	return { register, handleSubmit, reset, errors, watch }
}
