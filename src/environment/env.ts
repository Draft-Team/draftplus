export const env = {
	PORT: process.env.PORT as string,
	NODE_ENV: process.env.NODE_ENV as string,
	VERCEL_URL: process.env.VERCEL_URL as string,
	RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX as string,
	RATE_LIMIT_INTERVAL: process.env.RATE_LIMIT_INTERVAL as string
}
