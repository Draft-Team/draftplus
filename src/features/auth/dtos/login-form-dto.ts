import { z } from 'zod'

export const LoginFormDTO = z.object({
	email: z
		.string()
		.min(1, { message: 'Esse campo precisa ser preenchido' })
		.email('Precisa ser um email valido'),
	password: z.string().min(1, { message: 'Esse campo precisa ser preenchido' })
})

export type LoginFormData = z.infer<typeof LoginFormDTO>
