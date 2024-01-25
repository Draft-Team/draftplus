import { LegalType } from '@/types/legal-types'

const consentData: LegalType = {
	'1': {
		titulo: 'Consentimento e Aceitação',
		descricao:
			'Ao acessar e utilizar este site, você concorda com os termos de uso e a política de privacidade descritos abaixo. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site.'
	},
	'2': {
		titulo: 'Coleta e Tratamento de Dados Pessoais',
		descricao:
			'Entendemos a importância da privacidade e cumprimos as disposições da Lei Geral de Proteção de Dados (LGPD). Ao utilizar nosso site, você consente expressamente com a coleta, armazenamento e tratamento de seus dados pessoais de acordo com a nossa Política de Privacidade.'
	},
	'3': {
		titulo: 'Uso Autorizado dos Dados',
		descricao:
			'Os dados pessoais coletados serão utilizados exclusivamente para os fins informados durante a coleta, como personalização de conteúdo, comunicação, e melhoria contínua da experiência do usuário. Não compartilharemos seus dados com terceiros sem seu consentimento expresso.'
	},
	'4': {
		titulo: 'Direitos do Titular dos Dados',
		descricao:
			'Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos ou se tiver dúvidas sobre o tratamento de seus dados, entre em contato conosco através das informações fornecidas na Política de Privacidade.'
	},
	'5': {
		titulo: 'Segurança dos Dados',
		descricao:
			'Implementamos medidas de segurança para proteger seus dados pessoais contra acessos não autorizados, alterações, divulgações ou destruições não autorizadas.'
	},
	'6': {
		titulo: 'Cookies e Tecnologias Semelhantes',
		descricao:
			'Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário. Ao utilizar nosso site, você consente com o uso dessas tecnologias, de acordo com nossa Política de Cookies.'
	},
	'7': {
		titulo: 'Compartilhamento de Receitas e Conteúdo do Usuário',
		descricao:
			'Ao compartilhar receitas ou qualquer outro conteúdo, você compreende e concorda que essas informações serão públicas. Recomendamos evitar a divulgação de dados pessoais sensíveis em áreas públicas do site.'
	},
	'8': {
		titulo: 'Atualizações nos Termos e Políticas',
		descricao:
			'Reservamo-nos o direito de atualizar e modificar periodicamente estes termos de uso e nossa política de privacidade. Notificaremos os usuários sobre mudanças significativas e recomendamos revisar regularmente essas políticas.'
	},
	'9': {
		titulo: 'Encerramento da Conta',
		descricao:
			'Você pode encerrar sua conta a qualquer momento, sujeito aos termos de nossa política de privacidade.'
	}
}

const Page = () => {
	return (
		<section className='container mx-auto'>
			<div className='mb-20 space-y-4'>
				<h1 className='text-5xl'>Termos de uso</h1>
				<p className='text-muted-foreground'>Ultima atualização em 15/01/2024</p>
			</div>
			<div className='space-y-6'>
				{Object.entries(consentData).map(([key, item]) => (
					<div key={item.titulo}>
						<h2 className='text-2xl'>{`${key}. ${item.titulo}`}</h2>
						<p className='text-muted-foreground'>{item.descricao}</p>
						{'itens' in item &&
							Object.entries(item.itens).map(([subKey, subitem]) => (
								<div className='ml-4' key={subitem.titulo}>
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
