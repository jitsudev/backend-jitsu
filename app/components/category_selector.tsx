import prisma from "../client";

export default async function CategorySelect({ initialvalue }: { initialvalue?: Array<string> }) {
	const categorias = await prisma.categoria.findMany();

	return (
		<div className="flex justify-between w-full p-2 border-2 rounded">
			{categorias?.map((cat) => (
				<div className="text-white capitalize">
					<input type="checkbox" name="categorias" value={cat.title} checked={initialvalue?.includes(cat.title)} className="mr-2" />
					{cat.title}
				</div>
			))}
		</div>
	);
}
