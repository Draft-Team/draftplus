import { HttpResponse, ResponseResolver } from 'msw'

interface Recipe {
	id: number
	imageSrc: string
	title: string
	description: string
	cookTime: string
	servingSize: string
}

interface RecipesResponse {
	recipes: Recipe[]
}

const recipes = [
	{
		id: 1,
		imageSrc: '/chef.jpg',
		title: 'Pizza Hawaiana',
		description:
			'Uma mistura deliciosa de fatias de presunto suculento e pedaços de abacaxi fresco, tudo isso coberto por queijo derretido, servido sobre uma base de massa crocante.',
		cookTime: '25 Mins',
		servingSize: '2 Pessoas'
	},
	{
		id: 2,
		imageSrc: '/chef.jpg',
		title: 'Pizza Margherita',
		description:
			'Uma pizza clássica italiana com molho de tomate, queijo mozzarella fresco e manjericão. Simples, mas deliciosa!',
		cookTime: '30 Mins',
		servingSize: '3 Pessoas'
	},
	{
		id: 3,
		imageSrc: '/chef.jpg',
		title: 'Calzone de Frango',
		description:
			'Um calzone recheado com frango grelhado, queijo, cogumelos e molho marinara. Uma opção saborosa e diferente!',
		cookTime: '35 Mins',
		servingSize: '4 Pessoas'
	}
]

export const recipesResolver: ResponseResolver = async () => {
	const allRecipes: RecipesResponse = {
		recipes: recipes
	}

	if (!allRecipes) {
		return new HttpResponse(null, { status: 401 })
	}

	return HttpResponse.json(allRecipes)
}
