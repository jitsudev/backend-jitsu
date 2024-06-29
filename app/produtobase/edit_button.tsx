"use client";

import { ProdutoBase } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function EditButton({ produto }: { produto: ProdutoBase }) {
	return (
		<Link href={`/produtobase/editar/${produto.id}`} className="flex items-center justify-center bg-blue-500 p-2 rounded-full">
			<Pencil size={15} stroke="white" />
		</Link>
	);
}
