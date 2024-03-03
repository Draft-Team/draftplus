import { z } from "zod"

const envSchema = z.object({
	// Node variables
	NODE_ENV: z.enum(["development", "production", "test"]),

	// Backend variables
	BACKEND_URL: z.string()
})

export const env = envSchema.parse(process.env)
