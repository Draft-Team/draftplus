import { HttpResponse, ResponseResolver } from 'msw'

interface LoginBody {
	email: string
	password: string
}

export const loginResolver: ResponseResolver = async ({ request }) => {
	const body = (await request.json()) as LoginBody
	return HttpResponse.json({
		user: {
			id: 'abc-123',
			email: body.email,
			password: body.password
		}
	})
}
