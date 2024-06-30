import prisma from "@/app/client";
import CorCircle from "@/app/components/cor_circle";
import AvaliabilityChecker from "./avaliability";

export default async function ProdutoBaseSelector() {
	const _produto = await prisma.catalogo.findMany({ where: { cor: { contains: "Branco" } } });

	return (
		<div className="flex flex-col h-full">
			<div className="flex justify-between items-center gap-2 bg-black text-white mb-2 p-2">
				<span className="w-1/6">Nome </span>
				<span className="w-1/6">Estilo </span>
				<span className="w-1/6">Tamanho </span>
				<span className="w-1/6">Cor</span>
				<span className="w-1/6">SKU</span>
				<span className="w-1/6">Disponibilidade</span>
			</div>
			{_produto.map((produto) => (
				<div key={produto.id} className="flex justify-between items-center bg-gray-200 mb-2 p-2">
					<span className="w-1/6 flex items-center gap-2">
						<CorCircle nome={produto.cor} />
						{produto.nome}{" "}
					</span>
					<span className="w-1/6">{produto.estilo} </span>
					<span className="w-1/6">{produto.tamanho} </span>
					<span className="w-1/6"> {produto.cor}</span>
					<span className="w-1/6"> {produto.sku}</span>
					<span className="w-1/6">
						{" "}
						<AvaliabilityChecker sku={produto.sku} />
					</span>
				</div>
			))}
		</div>
	);
}
