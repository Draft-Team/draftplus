import { Clock3, HelpCircle, LucideHeart, UserRound } from 'lucide-react'

import { isLeft, isRight } from '@/libs/either'
import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import * as RecipeCard from '@/shared/components/recipe-card'

import { getRecipes } from '../actions'

export const PopuparRecipes = async () => {
	const recipes = await getRecipes()

	return (
		<div className='grid grid-cols-1 place-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
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
			{isRight(recipes) &&
				recipes.value.data.recipes.map((recipe) => (
					<RecipeCard.Root key={recipe.title}>
						<RecipeCard.Banner className='relative'>
							<figure className='relative h-[250px] overflow-hidden rounded-t-md border-b lg:max-w-[586px]'>
								<BlurImage
									className='h-full w-full object-cover'
									src={recipe.imageSrc}
									fill
									placeholder='blur'
									blurDataURL={placeholderBlurhash}
									alt='DraftPlus Logo'
								/>
							</figure>
							<div className='absolute right-3 top-3'>
								<div className='relative cursor-pointer transition hover:opacity-80'>
									<LucideHeart
										size={28}
										className={`absolute -right-[2px] -top-[2px] fill-rose-500 text-white `}
									/>
								</div>
							</div>
						</RecipeCard.Banner>
						<RecipeCard.Content>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								{recipe.title}
							</h5>

							<p className='line-clamp-5 min-h-[120px] font-normal text-muted-foreground'>
								{recipe.description}
							</p>
						</RecipeCard.Content>
						<RecipeCard.Footer>
							<div className='flex gap-1'>
								<Clock3 className='text-primary' />
								<span className='text-cinza/80'>{recipe.cookTime}</span>
							</div>
							<div className='flex gap-1'>
								<UserRound className='text-[#564FFD]' />
								<span className='text-cinza/80'>{recipe.servingSize}</span>
							</div>
						</RecipeCard.Footer>
					</RecipeCard.Root>
				))}
		</div>
	)
}
