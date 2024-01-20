import { http } from 'msw'

import { loginResolver } from './resolvers'

export const loginHandlers = [http.post('http://localhost/login', loginResolver)]
