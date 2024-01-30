import { setupServer } from 'msw/node'

import { loginHandlers } from './login/handlers'
import { popularRecipeHandlers } from './popular-recipes/handlers'
import { recipeHandlers } from './recipes/handlers'

export const server = setupServer(
	...loginHandlers,
	...popularRecipeHandlers,
	...recipeHandlers
)
