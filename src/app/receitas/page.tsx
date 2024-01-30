import { HelpCircle } from 'lucide-react'

import { getRecipes } from '@/features/recipes/actions/get-recipes'
import { RecipesWithFilter } from '@/features/recipes/components'
import { isLeft, isRight } from '@/libs/either'

const Page = async () => {
	const recipes = await getRecipes()

	return (
		<section className='container mx-auto'>
			{isRight(recipes) && <RecipesWithFilter recipes={recipes.value.data.recipes} />}
			{isLeft(recipes) && (
				<>
					<div className='flex flex-col items-center gap-4'>
						<HelpCircle size={44} className='text-primary' />
						Houve um erro. Parece que não temos receitas.
					</div>
					<div className='flex flex-col items-center gap-4'>
						<HelpCircle size={44} className='text-primary' />
						Houve um erro. Parece que não temos receitas.
					</div>
					<div className='flex flex-col items-center gap-4'>
						<HelpCircle size={44} className='text-primary' />
						Houve um erro. Parece que não temos receitas.
					</div>
				</>
			)}
		</section>
	)
}

export default Page
