import DeleteButton from "../delete_button";
import prisma from "@/app/client";
import ListaCores from "../../lista_cores";
import { ShieldQuestion } from "lucide-react";
import { CloseButton } from "@/app/components/close_button";

export default async function DeleteConfirmation({ params }: { params: { id: string } }) {
	const _produto = await prisma.produtoBase.findFirst({ where: { id: parseInt(params.id) } });
	if (!_produto) return <div>Produto não encontrado</div>;
	return (
		<div className="flex w-full h-full justify-center items-center">
			<div className="flex bg-white gap-2 p-10 flex-col w-1/2 justify-center items-center rounded">
				<span className="text-2xl font-bold">{_produto.name}</span>
				<span className="text-xs font-bold">{_produto.composition}</span>
				<span>R$ {parseInt(_produto.cost).toFixed(2)}</span>
				<ListaCores cores={_produto.cores.split(",")} />
				<span className="flex items-center gap-3 my-6 w-full text-center px-4 py-2 rounded bg-red-200">
					<ShieldQuestion size={40} stroke="red" /> Você irá apagar um produto base, todos os produtos que usam este produto base serão afetados.
				</span>
				<div className="flex w-full justify-between">
					<CloseButton className="bg-gray-400 px-6 py-2 rounded ">Cancelar</CloseButton>
					<DeleteButton className="flex items-center w-2/3 text-white justify-center bg-red-500 px-4 py-2 rounded" produto={_produto} />
				</div>
			</div>
		</div>
	);
}
