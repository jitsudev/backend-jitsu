import prisma from "../../client";
import { DeleteButton } from "./deleteButton";

export default async function CategoryList() {
	const categorias = await prisma.categoria.findMany();
	return (
		<div className="flex flex-col w-1/4 justify-between gap-2">
			{categorias.map((e, i) => (
				<div key={i} className="flex w-full justify-between gap-2">
					<span>
						{i + 1} - {e.title}
					</span>
					<DeleteButton id={e.id} />
				</div>
			))}
		</div>
	);
}
