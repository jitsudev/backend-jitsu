import { PrismaClient } from "@prisma/client";
import { User } from "lucide-react";

const prisma = new PrismaClient();

export default async function Home() {
	const produtos = await prisma.produto.findMany();
	return (
		<main className="flex flex-col w-full h-full">
			<h1 className="mb-10">Dashboard</h1>
			<div className="flex w-full justify-between">
				<div>Produtos cadastrados: {produtos?.length}</div>
				<div>Clientes cadastrados: 0</div>
				<div>Pedidos: 0</div>
				<div>Pedidos: 0</div>
			</div>
		</main>
	);
}
