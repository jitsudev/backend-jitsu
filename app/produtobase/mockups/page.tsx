"use client";
import { ChangeEvent, useState } from "react";
import SeletorProdutos from "../(ui)/seletor_produtos";
import { getCoresProduto } from "../actions";
import MockupCard from "./mockup_card";

export default function Page() {
	const [produto, setProduto] = useState<string>("");
	const [cores, setCores] = useState<Array<string>>([]);

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		const _selected = e.currentTarget.selectedOptions[0].value;
		setProduto(_selected);
		setCores(await getCoresProduto(_selected));
	};

	return (
		<div className="flex flex-col gap-2 w-full">
			<SeletorProdutos onChange={handleChange} />
			{cores.map((cor) => (
				<MockupCard produto={produto} cor={cor} />
			))}
		</div>
	);
}
