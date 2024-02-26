import { z } from "zod"

const envSchema = z.object({
	// Node variables
	NODE_ENV: z.enum(["development", "production", "test"])
})

export const env = envSchema.parse(process.env)
