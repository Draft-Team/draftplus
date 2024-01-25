import { LegalType } from '@/types/legal-types'

const jsonData: LegalType = {
	'1': {
		titulo: 'O que são Cookies?',
		descricao:
			'Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para garantir o funcionamento adequado dos sites, bem como para fornecer informações aos proprietários do site.'
	},
	'2': {
		titulo: 'Tipos de Cookies Utilizados',
		itens: {
			'2.1': {
				titulo: 'Cookies Necessários',
				descricao:
					'Essenciais para o funcionamento do site, permitindo o acesso a áreas seguras, autenticação de usuários, e garantindo a integridade do site.'
			},
			'2.2': {
				titulo: 'Cookies de Desempenho',
				descricao:
					'Coletam informações sobre a forma como os usuários interagem com o site, como as páginas visitadas, tempo gasto no site, e mensagens de erro. Esses cookies são usados para melhorar o desempenho do site.'
			},
			'2.3': {
				titulo: 'Cookies de Funcionalidade',
				descricao:
					'Permitem que o site se lembre das escolhas feitas pelo usuário, como nome de usuário, idioma ou região, proporcionando uma experiência personalizada.'
			}
		}
	},
	'3': {
		titulo: 'Como Controlar os Cookies',
		descricao:
			'Você pode gerenciar as configurações de cookies através das configurações do seu navegador. A maioria dos navegadores permite que você bloqueie ou remova cookies. No entanto, isso pode afetar a funcionalidade do site.'
	},
	'4': {
		titulo: 'Atualizações na Política de Cookies',
		descricao:
			'Reservamo-nos o direito de atualizar esta Política de Cookies para refletir mudanças nas práticas de cookies. Recomendamos que os usuários revisem periodicamente esta política para estar cientes de quaisquer alterações.'
	}
}

const Page = () => {
	return (
		<section className='container mx-auto'>
			<div className='mb-20 space-y-4'>
				<h1 className='text-5xl'>Política de Cookies</h1>
				<p className='text-muted-foreground'>Ultima atualização em 15/01/2024</p>
			</div>
			<div className='space-y-6'>
				{Object.entries(jsonData).map(([key, item]) => (
					<div key={item.titulo}>
						<h2 className='text-2xl'>{`${key}. ${item.titulo}`}</h2>
						<p className='text-muted-foreground'>{item.descricao}</p>
						{'itens' in item &&
							Object.entries(item.itens).map(([subKey, subitem]) => (
								<div className='ml-4 ' key={subitem.titulo}>
									<h3 className='mt-4 text-lg'>{`${subKey}. ${subitem.titulo}`}</h3>
									<p className='text-muted-foreground'>{subitem.descricao}</p>
								</div>
							))}
					</div>
				))}
			</div>
		</section>
	)
}

export default Page
