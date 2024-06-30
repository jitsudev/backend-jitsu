"use client";

import { ProdutoBase } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { deleteProduto } from "../actions";

export default function DeleteButton({ produto, className }: { produto: ProdutoBase; className?: string }) {
	return (
		<button type="submit" className={className} onClick={() => deleteProduto(produto)}>
			<Trash2 size={15} stroke="white" className="mr-2" /> Apagar {produto.name}
		</button>
	);
}
