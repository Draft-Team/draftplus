import { HttpResponse, ResponseResolver } from 'msw'

interface LoginBody {
	email: string
	password: string
}

interface LoginResponse {
	accessToken: {
		id: string
		name: string
		email: string
	}
}

const users = [
	{
		id: '1',
		name: 'User',
		email: 'user@email.com',
		password: 'user-password'
	},
	{
		id: '2',
		name: 'User 2',
		email: 'user2@email.com',
		password: 'user2-password'
	}
]

export const loginResolver: ResponseResolver = async ({ request }) => {
	const body = (await request.json()) as LoginBody

	const user = users.find(
		(user) => user.email === body.email && user.password === body.password
	)

	if (!user) {
		return new HttpResponse(null, { status: 401 })
	}

	const token: LoginResponse = {
		accessToken: {
			id: user.id,
			name: user.name,
			email: user.email
		}
	}

	return HttpResponse.json(token)
}
