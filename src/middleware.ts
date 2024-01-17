import { loggingMiddleware } from '@/features/logging/logging-middleware'
import { createMiddleware } from '@/libs/middleware'

export default createMiddleware({
	'*': [loggingMiddleware]
})

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}
