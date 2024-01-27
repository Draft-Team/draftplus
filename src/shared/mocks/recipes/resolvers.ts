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

const imageSrc =
	'https://images-ext-1.discordapp.net/external/0XdJTMM8E7GkzngLoQQvJ2H6SudaLNWedCelVD4Fqts/https/anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita-1024x576.jpg?format=webp'

const recipes: RecipesResponse['recipes'] = [
	{
		id: 1,
		imageSrc,
		title: 'Pizza Hawaiana',
		description:
			'Uma mistura deliciosa de fatias de presunto suculento e pedaços de abacaxi fresco, tudo isso coberto por queijo derretido, servido sobre uma base de massa crocante.',
		cookTime: '25 Mins',
		servingSize: '2 Pessoas'
	},
	{
		id: 2,
		imageSrc,
		title: 'Pizza Margherita',
		description:
			'Uma pizza clássica italiana com molho de tomate, queijo mozzarella fresco e manjericão. Simples, mas deliciosa!',
		cookTime: '30 Mins',
		servingSize: '3 Pessoas'
	},
	{
		id: 3,
		imageSrc,
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
