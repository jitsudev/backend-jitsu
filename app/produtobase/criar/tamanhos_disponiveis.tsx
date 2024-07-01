"use client";
import { ChangeEvent, useEffect, useState } from "react";

export default function TamanhosDisponiveis({ tamanhos }: { tamanhos: string[] }) {
	const [disponíveis, setDisponiveis] = useState<Array<string>>([]);
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
		setChecked(tamanhos);
		setDisponiveis(tamanhos);
	}, [tamanhos]);

	return (
		<div className="flex flex-wrap my-2 bg-white rounded justify-between">
			{disponíveis.map((tamanho: string) => (
				<div className="flex items-center gap-2 p-2">
					<input name="tamanhos[]" type="checkbox" title={tamanho} value={tamanho} onChange={handleChange} checked={checked.includes(tamanho)} />
					<span className="text-sm">{tamanho}</span>
				</div>
			))}
		</div>
	);
}
