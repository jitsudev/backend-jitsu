import prisma from "../client";

export default async function Page() {
	const produtos = await prisma.produto.findMany();
	return (
		<div>
			<h1>Produtos</h1>
			<div>
				{produtos?.map((e, i) => (
					<div key={i}>{e.title}</div>
				))}
			</div>
		</div>
	);
}
