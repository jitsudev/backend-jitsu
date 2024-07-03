"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { getTamanhosProduto } from "../actions";

export default function SeletorTamanhos({ produto, selected }: { produto: string; selected?: string[] }) {
	const [disponiveis, setDisponiveis] = useState<Array<string>>([]);
	const [checked, setChecked] = useState<Array<string>>([]);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			var newchecked = [...checked];
			newchecked.push(e.currentTarget.value);
			setChecked(newchecked);
		} else {
			setChecked([...checked].filter((s) => s != e.currentTarget.value));
		}
	};

	useEffect(() => {
		const _get = async () => {
			const _disponiveis = await getTamanhosProduto(produto);
			setDisponiveis(_disponiveis);
			selected ? setChecked(selected) : setChecked(_disponiveis);
		};
		_get();
	}, [produto]);

	return (
		<div className="flex flex-wrap my-2 bg-white rounded justify-between">
			{disponiveis.map((tamanho: string, i: number) => (
				<div key={i} className="flex items-center gap-2 p-2">
					<input name="tamanhos[]" type="checkbox" title={tamanho} value={tamanho} onChange={handleChange} checked={checked.includes(tamanho)} />
					<span className="text-sm">{tamanho}</span>
				</div>
			))}
		</div>
	);
}
