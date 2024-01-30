import { HttpResponse, ResponseResolver } from 'msw'

interface Recipe {
	id: number
	imageSrc: string
	title: string
	description: string
	cookTime: string
	servingSize: string
	favoriteCount: number
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
		servingSize: '2 Pessoas',
		favoriteCount: 10
	},
	{
		id: 2,
		imageSrc,
		title: 'Pizza Margherita',
		description:
			'Uma pizza clássica italiana com molho de tomate, queijo mozzarella fresco e manjericão. Simples, mas deliciosa!',
		cookTime: '30 Mins',
		servingSize: '3 Pessoas',
		favoriteCount: 15
	},
	{
		id: 3,
		imageSrc,
		title: 'Calzone de Frango',
		description:
			'Um calzone recheado com frango grelhado, queijo, cogumelos e molho marinara. Uma opção saborosa e diferente!',
		cookTime: '35 Mins',
		servingSize: '4 Pessoas',
		favoriteCount: 5
	},
	{
		id: 4,
		imageSrc,
		title: 'Spaghetti Carbonara',
		description:
			'Um prato clássico italiano de espaguete com um molho cremoso de ovos, queijo parmesão, pancetta e pimenta preta.',
		cookTime: '20 Mins',
		servingSize: '2 Pessoas',
		favoriteCount: 8
	},
	{
		id: 5,
		imageSrc,
		title: 'Tacos de Carne Asada',
		description:
			'Tacos recheados com carne asada grelhada, cebola, coentro e molho de pimenta. Uma explosão de sabores mexicanos!',
		cookTime: '25 Mins',
		servingSize: '4 Pessoas',
		favoriteCount: 12
	},
	{
		id: 6,
		imageSrc,
		title: 'Salada Caprese',
		description:
			'Uma salada refrescante com tomate, mussarela de búfala, manjericão fresco, azeite e vinagre balsâmico.',
		cookTime: '15 Mins',
		servingSize: '2 Pessoas',
		favoriteCount: 7
	}
]

export const popularRecipesResolver: ResponseResolver = async () => {
	const sortedRecipes = recipes.slice().sort((a, b) => b.favoriteCount - a.favoriteCount)
	const top3Recipes = sortedRecipes.slice(0, 3)

	const top3RecipesResponse: RecipesResponse = {
		recipes: top3Recipes
	}

	if (!top3RecipesResponse) {
		return new HttpResponse(null, { status: 401 })
	}

	return HttpResponse.json(top3RecipesResponse)
}
