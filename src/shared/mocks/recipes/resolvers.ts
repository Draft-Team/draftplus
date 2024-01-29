import { HttpResponse, ResponseResolver } from 'msw'

export interface Recipe {
	id: number
	imageSrc: string
	title: string
	description: string
	cookTime: number
	servingSize: number
	favoriteCount?: number
}

export interface RecipesResponse {
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
		cookTime: 50,
		servingSize: 5,
		favoriteCount: 10
	},
	{
		id: 2,
		imageSrc,
		title: 'Pizza Margherita',
		description:
			'Uma pizza clássica italiana com molho de tomate, queijo mozzarella fresco e manjericão. Simples, mas deliciosa!',
		cookTime: 300,
		servingSize: 6,
		favoriteCount: 15
	},
	{
		id: 3,
		imageSrc,
		title: 'Calzone de Frango',
		description:
			'Um calzone recheado com frango grelhado, queijo, cogumelos e molho marinara. Uma opção saborosa e diferente!',
		cookTime: 33,
		servingSize: 14,
		favoriteCount: 5
	},
	{
		id: 4,
		imageSrc,
		title: 'Spaghetti Carbonara',
		description:
			'Um prato clássico italiano de espaguete com um molho cremoso de ovos, queijo parmesão, pancetta e pimenta preta.',
		cookTime: 45,
		servingSize: 1,
		favoriteCount: 8
	},
	{
		id: 5,
		imageSrc,
		title: 'Tacos de Carne Asada',
		description:
			'Tacos recheados com carne asada grelhada, cebola, coentro e molho de pimenta. Uma explosão de sabores mexicanos!',
		cookTime: 120,
		servingSize: 12,
		favoriteCount: 12
	},
	{
		id: 6,
		imageSrc,
		title: 'Salada Caprese',
		description:
			'Uma salada refrescante com tomate, mussarela de búfala, manjericão fresco, azeite e vinagre balsâmico.',
		cookTime: 90,
		servingSize: 22,
		favoriteCount: 7
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
