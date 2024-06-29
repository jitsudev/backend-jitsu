import prisma from "@/app/client";
import FormUpdateProdutoBase from "../form";

export default async function Page({ params }: { params: { id: string } }) {
	const produto = await prisma.produtoBase.findFirst({ where: { id: parseInt(params.id) } });
	if (!produto) return <div>Produto não encontrado</div>;
	return (
		<div>
			Editar produto base {produto?.name}
			<FormUpdateProdutoBase produto={produto} />
		</div>
	);
}
