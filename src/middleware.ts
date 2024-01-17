import { createMiddleware } from '@/libs/middleware'
import { loggingMiddleware } from '@/middlewares/logging-middleware'
import { rateLimitMiddleware } from '@/middlewares/rate-limit-middleware'

export default createMiddleware({
	'*': [loggingMiddleware, rateLimitMiddleware]
})

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}
