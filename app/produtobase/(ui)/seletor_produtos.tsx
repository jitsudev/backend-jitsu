"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { getNomesProdutos } from "../actions";

export default function SeletorProdutos({ name, value, onChange }: { name: string; value: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void }) {
	const [nomes, setNomes] = useState<Array<string>>();

	const _getNomes = async () => setNomes(await getNomesProdutos());

	useEffect(() => {
		_getNomes();
	}, []);

	return (
		<div>
			<select name={name} className="flex p-2 rounded w-full" onChange={onChange}>
				<option value="" selected={value == ""}>
					Selecione um produto
				</option>
				{nomes?.map((nome, i) => (
					<option key={i} value={nome}>
						{nome}
					</option>
				))}
			</select>
		</div>
	);
}
