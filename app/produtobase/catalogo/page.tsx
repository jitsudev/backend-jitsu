import prisma from "@/app/client";
import CorCircle from "@/app/components/cor_circle";
import AvaliabilityChecker from "./avaliability";
import CatalogFilters from "./filters";
import { Prisma } from "@prisma/client";

export default async function ProdutoBaseSelector({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
	const { nome, cor, tamanho, estilo, sku, ordenarpor, ordem } = searchParams;

	const orderBy: Prisma.CatalogoOrderByWithRelationAndSearchRelevanceInput = {
		...(ordenarpor ? { [ordenarpor as string]: ordem } : {}),
	};

	const _produto = await prisma.catalogo.findMany({
		where: {
			nome: { contains: nome as string, mode: "insensitive" },
			cor: { contains: cor as string, mode: "insensitive" },
			tamanho: { contains: tamanho as string, mode: "insensitive" },
			estilo: { contains: estilo as string, mode: "insensitive" },
			sku: { contains: sku as string, mode: "insensitive" },
		},
		orderBy,
	});

	return (
		<div className="flex flex-col h-full">
			<CatalogFilters />
			<div className="flex justify-between items-center gap-2 bg-black text-white mb-2 p-2 rounded">
				<span className="w-3/12">Nome </span>

				<span className="w-1/12">Tamanho </span>
				<span className="w-2/12">Cor</span>
				<span className="w-2/12">SKU</span>
				<span className="w-2/12">Estilo </span>
				<span className="w-2/12">Disponibilidade</span>
			</div>

			{_produto.map((produto) => (
				<div key={produto.id} className="flex justify-between items-center bg-gray-200 mb-2 p-2 rounded">
					<span className="w-3/12 flex items-center gap-2">
						<CorCircle nome={produto.cor} />
						{produto.nome}{" "}
					</span>

					<span className="w-1/12">{produto.tamanho} </span>
					<span className="w-2/12"> {produto.cor}</span>
					<span className="w-2/12"> {produto.sku}</span>
					<span className="w-2/12">{produto.estilo} </span>
					<span className="w-2/12">
						<AvaliabilityChecker sku={produto.sku} />
					</span>
				</div>
			))}
		</div>
	);
}
