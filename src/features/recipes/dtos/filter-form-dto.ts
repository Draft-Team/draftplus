import { z } from 'zod'

export const FilterFormDTO = z.object({
	name: z.string().optional(),
	prepTime: z
		.number()
		.int()
		.min(0, {
			message: 'O tempo de preparo deve ser um número inteiro positivo ou zero.'
		})
		.optional(),
	serves: z
		.number()
		.int()
		.min(1, { message: 'O número de porções deve ser um número inteiro positivo.' })
		.optional()
})

export type FilterFormData = z.infer<typeof FilterFormDTO>
