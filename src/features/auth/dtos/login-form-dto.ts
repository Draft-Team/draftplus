import { z } from 'zod'

export const LoginFormDTO = z.object({
	email: z
		.string()
		.min(1, { message: 'Esse campo precisa ser preenchido' })
		.email('Precisa ser um email valido'),
	password: z
		.string()
		.regex(new RegExp('.*[A-Z].*'), 'Uma letra maiúscula')
		.regex(new RegExp('.*[a-z].*'), 'Uma letra minúscula')
		.regex(new RegExp('.*\\d.*'), 'Um número')
		.regex(
			new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
			'Um caractere especial'
		)
		.min(8, 'Deve ter pelo menos 8 caracteres de comprimento')
})

export type LoginFormData = z.infer<typeof LoginFormDTO>
