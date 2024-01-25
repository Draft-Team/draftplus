import { LegalType } from '@/types/legal-types'

const privacyData: LegalType = {
	'1': {
		titulo: 'Informações Coletadas',
		itens: {
			'1.1': {
				titulo: 'Informações Pessoais',
				descricao:
					'Podemos coletar informações pessoais, como nome, endereço de e-mail, data de nascimento, e outras informações que você forneça voluntariamente ao utilizar o site.'
			},
			'1.2': {
				titulo: 'Informações de Uso',
				descricao:
					'Podemos coletar informações sobre sua interação com o site, como páginas visitadas, tempo de permanência no site, e outras estatísticas de uso.'
			}
		}
	},
	'2': {
		titulo: 'Uso das Informações',
		itens: {
			'2.1': {
				titulo: 'Personalização',
				descricao:
					'As informações coletadas podem ser usadas para personalizar sua experiência no site, fornecendo conteúdo e recursos mais relevantes.'
			},
			'2.2': {
				titulo: 'Comunicação',
				descricao:
					'Podemos usar seu endereço de e-mail para enviar informações sobre atualizações, novidades, ou responder a solicitações e perguntas.'
			},
			'2.3': {
				titulo: 'Análise',
				descricao:
					'Utilizamos ferramentas analíticas para entender o comportamento dos usuários, melhorar a qualidade do site e otimizar a experiência do usuário.'
			}
		}
	},
	'3': {
		titulo: 'Compartilhamento de Informações',
		itens: {
			'3.1': {
				titulo: 'Terceiros',
				descricao:
					'Não compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.'
			},
			'3.2': {
				titulo: 'Parceiros e Fornecedores',
				descricao:
					'Podemos utilizar serviços de terceiros para fornecer funcionalidades específicas do site, sendo que estes terão acesso apenas às informações necessárias para cumprir suas funções.'
			}
		}
	},
	'4': {
		titulo: 'Segurança das Informações',
		descricao:
			'Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, divulgação ou destruição não autorizada.'
	},
	'5': {
		titulo: 'Cookies e Tecnologias Semelhantes',
		descricao:
			'Podemos utilizar cookies e tecnologias similares para melhorar a experiência do usuário. Ao utilizar o site, você consente com o uso dessas tecnologias, conforme detalhado em nossa Política de Cookies.'
	},
	'6': {
		titulo: 'Seus Direitos',
		descricao:
			'Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Para exercer esses direitos ou se tiver dúvidas sobre o tratamento de seus dados, entre em contato conosco.'
	},
	'7': {
		titulo: 'Alterações na Política de Privacidade',
		descricao:
			'Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre mudanças significativas.'
	}
}

const Page = () => {
	return (
		<section className='container mx-auto'>
			<div className='mb-20 space-y-4'>
				<h1 className='text-5xl'>Política de Privacidade</h1>
				<p className='text-muted-foreground'>Ultima atualização em 15/01/2024</p>
			</div>
			<div className='space-y-6'>
				{Object.entries(privacyData).map(([key, item]) => (
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
