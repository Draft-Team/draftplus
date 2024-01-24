import Link from 'next/link'

import { ChefHat, UtensilsCrossed } from 'lucide-react'

const categories = [
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Frutos do Mar',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Massas',
		href: '/login'
	},
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Comida Oriental',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Vegetariana',
		href: '/login'
	},
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Churrasco',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Culinária Mexicana',
		href: '/login'
	},
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Culinária Indiana',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Sanduíches',
		href: '/login'
	},
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Sobremesas',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Saladas',
		href: '/login'
	},
	{
		icon: <ChefHat className='text-primary' />,
		name: 'Culinária Tailandesa',
		href: '/login'
	},
	{
		icon: <UtensilsCrossed className='text-primary' />,
		name: 'Pizza',
		href: '/login'
	}
]

export const HeroAnimation = () => {
	return (
		<>
			<div className='scene flex items-center justify-center rounded-3xl border'>
				<div className='relative w-full max-w-screen-lg overflow-hidden '>
					<div className='mx-auto grid h-[250px] w-[300px] animate-skew-scroll grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2'>
						{categories.map((item, i) => (
							<Link
								href={`${item.href}`}
								key={i}
								className='flex cursor-pointer items-center space-x-2 rounded-md border  p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl'>
								{item.icon}
								<p className=''>{item.name}</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
