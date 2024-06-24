"use client";

import { deleteCategory } from "@/app/actions";
import { Trash2 } from "lucide-react";

export const DeleteButton = ({ id }: { id: number }) => {
	return (
		<button onClick={() => deleteCategory(id)} className="text-white bg-red-500 rounded-full p-2">
			<Trash2 size={15} />
		</button>
	);
};
