import { setupServer } from 'msw/node'

import { loginHandlers } from './login/handlers'

export const server = setupServer(...loginHandlers)
