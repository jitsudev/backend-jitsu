"use client";

import { ProdutoBase } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { deleteProduto } from "./actions";

export default function DeleteButton({ produto }: { produto: ProdutoBase }) {
	return (
		<button className="flex items-center justify-center bg-red-500 p-2 rounded-full" onClick={() => deleteProduto(produto)}>
			<Trash2 size={15} stroke="white" />
		</button>
	);
}
