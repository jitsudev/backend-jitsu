import prisma from "../../client";
import { DeleteButton } from "./deleteButton";
import { EditableCategoryField } from "./editableField";

export default async function CategoryList() {
	const categorias = await prisma.categoria.findMany({ orderBy: [{ id: "asc" }] });
	return (
		<div className="flex flex-col w-1/4 justify-between gap-3">
			{categorias.map((e, i) => (
				<div key={i} className="flex w-full justify-between gap-2">
					<EditableCategoryField id={e.id} value={e.title} delay={2000} />
					<DeleteButton id={e.id} />
				</div>
			))}
		</div>
	);
}
