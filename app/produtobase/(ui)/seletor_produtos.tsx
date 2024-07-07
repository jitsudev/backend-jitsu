"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { getNomesProdutos } from "../actions";

export default function SeletorProdutos({ onChange, name }: { name: string; onChange: (e: ChangeEvent<HTMLSelectElement>) => void }) {
	const [nomes, setNomes] = useState<Array<string>>();
	const [selected, setSelected] = useState<string>();

	const _getNomes = async () => setNomes(await getNomesProdutos());

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _selected = e.currentTarget.selectedOptions[0].value;
		setSelected(_selected);
		onChange(e);
	};

	useEffect(() => {
		_getNomes();
	}, [selected]);

	return (
		<div>
			<select name={name} className="p-2 rounded w-full" value={selected} onChange={handleChange}>
				<option value="">Selecione um produto</option>
				{nomes?.map((nome, i) => (
					<option key={i} value={nome}>
						{nome}
					</option>
				))}
			</select>
		</div>
	);
}
