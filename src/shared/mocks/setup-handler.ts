import { setupServer } from 'msw/node'

import { loginHandlers } from './login/handlers'
import { recipeHandlers } from './recipes/handlers'

export const server = setupServer(...loginHandlers, ...recipeHandlers)
