import { z } from 'zod'

export const RegisterFormDTO = z.object({
	name: z.string().min(1, { message: 'Esse campo precisa ser preenchido' }),
	email: z
		.string()
		.min(1, { message: 'Esse campo precisa ser preenchido' })
		.email('Precisa ser um email valido'),
	password: z
		.string()
		.min(1, { message: 'Esse campo precisa ser preenchido' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        'A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial',
    })
})

export type RegisterFormData = z.infer<typeof RegisterFormDTO>
