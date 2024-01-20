import { HttpResponse, ResponseResolver } from 'msw'

export const loginResolver: ResponseResolver = () => {
	return HttpResponse.json({
		user: {
			id: 'abc-123',
			email: 'zap@email.com'
		}
	})
}
