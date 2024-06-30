import prisma from "@/app/client";

export default async function ProdutoBaseSelector() {
	const _produtosbase = await prisma.produtoBase.findMany();

	return (
		<select>
			{_produtosbase.map((produto) => (
				<option key={produto.id} value={produto.sku}>
					{produto.name} - R${produto.cost}
				</option>
			))}
		</select>
	);
}
