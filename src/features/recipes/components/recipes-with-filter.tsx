'use client'

import React from 'react'

import { PersonIcon } from '@radix-ui/react-icons'
import { ListFilter } from 'lucide-react'
import { toast } from 'sonner'

import {
	Form,
	FormButton,
	FormGroup,
	FormInputIcon,
	FormLabel
} from '@/shared/components/forms'
import { Button } from '@/shared/ui/button'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/shared/ui/collapsible'

import { FilterFormData } from '../dtos'
import { useFilterForm } from '../hooks/use-filter-form'

export const RecipesWithFilter = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const { errors, handleSubmit, register } = useFilterForm()

	const onSubmit = async (data: FilterFormData) => {
		if (data.name || data.serves || data.prepTime) {
			console.log('Query string:', data)
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
				<CollapsibleContent>
					<Form
						className='mt-4 flex  justify-between gap-4'
						onSubmit={handleSubmit(onSubmit)}>
						<FormGroup className='flex w-full flex-col gap-3'>
							<FormLabel htmlFor='name'>Nome</FormLabel>
							<FormInputIcon
								type='text'
								id='name'
								placeholder='Nome'
								icon={<PersonIcon />}
								{...register('name')}
							/>
							{errors.name && <span className='text-red-500'>{errors.name.message}</span>}
						</FormGroup>
						<FormGroup className='flex w-full flex-col gap-3'>
							<FormLabel htmlFor='server'>Serve quantos ?</FormLabel>
							<FormInputIcon
								type='number'
								id='server'
								placeholder='3'
								icon={<PersonIcon />}
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
								type='number'
								id='preptime'
								placeholder='Em minutos'
								icon={<PersonIcon />}
								{...register('prepTime', {
									setValueAs: (v) => (v === '' ? undefined : parseInt(v, 10))
								})}
							/>
							{errors.prepTime && (
								<span className='text-red-500'>{errors.prepTime.message}</span>
							)}
						</FormGroup>
						<div>
							<FormButton>Filtrar</FormButton>
						</div>
					</Form>
				</CollapsibleContent>
			</Collapsible>
		</>
	)
}
