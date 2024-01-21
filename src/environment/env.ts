type NodeEnv = 'development' | 'production'

export const env = {
	PORT: process.env.PORT as string,
	NODE_ENV: process.env.NODE_ENV as NodeEnv,
	VERCEL_URL: process.env.VERCEL_URL as string,
	BACKEND_URL: process.env.BACKEND_URL as string
}
