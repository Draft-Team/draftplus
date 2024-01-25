interface Item {
	titulo: string
	descricao?: string
}

interface ItemComItens extends Item {
	itens: Record<string, Item>
}

export type LegalType = Record<string, Item | ItemComItens>
