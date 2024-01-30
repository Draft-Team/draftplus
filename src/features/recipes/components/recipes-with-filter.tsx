'use client'

import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import {
	AlarmClockCheck,
	Clock3,
	ListFilter,
	LucideHeart,
	Soup,
	UserRound,
	Users
} from 'lucide-react'
import { toast } from 'sonner'

import { placeholderBlurhash } from '@/libs/utils'
import { BlurImage } from '@/shared/components/blur-image'
import {
	Form,
	FormButton,
	FormGroup,
	FormInputIcon,
	FormLabel
} from '@/shared/components/forms'
import * as RecipeCard from '@/shared/components/recipe-card'
import { RecipesResponse } from '@/shared/mocks/recipes/resolvers'
import { Button } from '@/shared/ui/button'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/shared/ui/collapsible'

import { FilterFormData } from '../dtos'
import { useFilterForm } from '../hooks/use-filter-form'

export const RecipesWithFilter = ({ recipes }: RecipesResponse) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const { errors, handleSubmit, register, reset } = useFilterForm()
	const [filteredRecipes, setFilteredRecipes] = React.useState(recipes)

	const handleClearFilters = () => {
		reset()
		setFilteredRecipes(recipes)
	}

	const onSubmit = async ({ name, prepTime, serves }: FilterFormData) => {
		if (name || serves || prepTime) {
			const filteredResults = recipes.filter((recipe) => {
				return (
					(name ? recipe.title.toLowerCase().includes(name.toLowerCase()) : true) &&
					(serves ? recipe.servingSize >= serves : true) &&
					(prepTime ? recipe.cookTime <= prepTime : true)
				)
			})

			console.log(name, serves, prepTime)

			setFilteredRecipes(filteredResults)
		} else {
			toast.error('Dados inválidos', {
				description: 'Preencha pelo menos um dos campos antes de submeter.'
			})
		}
	}

	return (
		<>
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<div className='flex justify-between'>
					<h1 className='max-w-[540px] text-3xl font-medium leading-9 md:text-4xl lg:text-[40px]'>
						Nossas Receitas
					</h1>
					<CollapsibleTrigger asChild>
						<Button className='flex items-center gap-2'>
							<ListFilter className='text-white' />
							Filtros
						</Button>
					</CollapsibleTrigger>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.15, ease: 'linear' }}>
							<CollapsibleContent>
								<Form
									className='mt-4 flex items-end gap-4 placeholder:justify-between'
									onSubmit={handleSubmit(onSubmit)}>
									<FormGroup className='flex w-full flex-col gap-3'>
										<FormLabel htmlFor='name'>Nome</FormLabel>
										<FormInputIcon
											type='text'
											id='name'
											placeholder='Nome'
											icon={<Soup />}
											{...register('name')}
										/>
										{errors.name && (
											<span className='text-red-500'>{errors.name.message}</span>
										)}
									</FormGroup>
									<FormGroup className='flex w-full flex-col gap-3'>
										<FormLabel htmlFor='server'>Serve quantos ?</FormLabel>
										<FormInputIcon
											id='server'
											placeholder='3'
											icon={<Users />}
											{...register('serves', {
												setValueAs: (v) => (v === '' ? undefined : parseInt(v, 10))
											})}
										/>
										{errors.serves && (
											<span className='text-red-500'>{errors.serves.message}</span>
										)}
									</FormGroup>
									<FormGroup className='flex w-full flex-col gap-3'>
										<FormLabel htmlFor='preptime'>Tempo de preparo</FormLabel>
										<FormInputIcon
											id='preptime'
											placeholder='Em minutos'
											icon={<AlarmClockCheck />}
											{...register('prepTime', {
												setValueAs: (v) => (v === '' ? undefined : parseInt(v, 10))
											})}
										/>
										{errors.prepTime && (
											<span className='text-red-500'>{errors.prepTime.message}</span>
										)}
									</FormGroup>
									<div className='flex gap-2'>
										<FormButton>Filtrar</FormButton>
										<Button type='button' onClick={() => handleClearFilters()}>
											Limpar Filtros
										</Button>
									</div>
								</Form>
							</CollapsibleContent>
						</motion.div>
					)}
				</AnimatePresence>
			</Collapsible>
			<div className='mt-6 grid grid-cols-1 place-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
				{filteredRecipes &&
					filteredRecipes.map((recipe) => (
						<motion.div
							key={recipe.title}
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}>
							<RecipeCard.Root key={recipe.title} className='mt-6'>
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
										<span className='dark:text-cinza/80'>{recipe.cookTime} Mins</span>
									</div>
									<div className='flex gap-1'>
										<UserRound className='text-[#564FFD]' />
										<span className=' dark:text-cinza/80'>
											{recipe.servingSize} Pessoas
										</span>
									</div>
								</RecipeCard.Footer>
							</RecipeCard.Root>
						</motion.div>
					))}
			</div>
		</>
	)
}
