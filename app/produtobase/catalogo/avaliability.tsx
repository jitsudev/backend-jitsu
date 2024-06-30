"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { checkAvaliabilityBySku } from "./check";

export default function AvaliabilityChecker({ sku }: { sku: string }) {
	const [quantidade, setQuantidade] = useState(0);

	const handleClick = async (sku: string) => {
		const quantity = await checkAvaliabilityBySku(sku);
		setQuantidade(quantity);
	};

	return (
		<div className="flex">
			<button onClick={() => handleClick(sku)} className="hover:text-gray-700">
				<ShoppingCart size={22} />
			</button>

			<span className="mx-2">{quantidade} disponíveis</span>
		</div>
	);
}
