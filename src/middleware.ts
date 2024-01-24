import { createMiddleware } from '@/libs/middleware'
import { loggingMiddleware } from '@/middlewares/logging-middleware'

export default createMiddleware({
	'*': [loggingMiddleware]
})

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}
