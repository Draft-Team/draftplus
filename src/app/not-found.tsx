import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='flex flex-col items-center justify-center bg-background'>
			<h1 className='text-9xl font-extrabold tracking-widest'>404</h1>
			<div className='text-cPrimary absolute rotate-12 rounded bg-primary px-2 text-sm'>
				Página não encontrada
			</div>

			<button className='mt-5'>
				<div className='group relative inline-block text-sm font-medium text-primary focus:outline-none focus:ring active:text-primary'>
					<span className='bg-blue-600group-hover:translate-y-0 absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0'></span>
					<Link
						className='relative block border border-current bg-background px-8 py-3'
						href='/'>
						Voltar
					</Link>
				</div>
			</button>
		</section>
	)
}
