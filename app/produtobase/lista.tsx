import Link from "next/link";
import prisma from "../client";
import DeleteButton from "./delete_button";
import ListaCores from "./lista_cores";
import EditButton from "./edit_button";

export default async function ListaProdutosBase() {
	const produtos = await prisma.produtoBase.findMany({ orderBy: { name: "asc" } });
	return (
		<div className="flex flex-col justify-between h-full">
			<div className="flex flex-wrap">
				{produtos.map((produto, i) => (
					<div key={i} className="flex items-center w-1/2 p-1">
						<div className="flex items-center w-full justify-between bg-white p-4 rounded">
							<div className="flex flex-col w-full mr-4">
								<div className="text-2xl font-bold mb-3">{produto.name}</div>
								<div className="flex w-full text-xs">
									<div className="flex flex-col w-3/12 ">
										<span className="font-bold">Composição:</span>
										<span> {produto.composition}</span>
									</div>
									<div className="flex flex-col w-2/12 ">
										<span className="font-bold">Custo:</span> <span>R${produto.cost}</span>
									</div>
									<div className="flex flex-col w-2/12">
										<span className="font-bold">SKU:</span> <span>{produto.sku}</span>
									</div>
									<div className="flex flex-col w-6/12">
										<span className="font-bold">Cores:</span> <ListaCores cores={produto.cores.split(",")} />
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-around items-center h-full gap-2">
								<EditButton produto={produto} />
								<DeleteButton produto={produto} />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-between">
				<Link href={"/produtobase/criar"} className="bg-green-500 text-white p-2 w-full rounded text-center">
					Adicionar novo produto
				</Link>
			</div>
		</div>
	);
}
