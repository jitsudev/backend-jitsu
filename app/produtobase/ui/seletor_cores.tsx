"use client";
import { CORES, Cor } from "@/app/util/dimona";
import { ChangeEvent, useEffect, useState } from "react";
import { getCoresProduto } from "../actions";

export default function SeletorCores({ produto, selected }: { produto: string; selected?: string[] }) {
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
			const _disponiveis = await getCoresProduto(produto);
			setDisponiveis(_disponiveis);
			selected ? setChecked(selected) : setChecked(_disponiveis);
		};
		_get();
	}, [produto]);

	return (
		<div className="flex flex-wrap gap-1 my-2">
			{CORES.map((cor: Cor, i: number) => (
				<div key={i} className="flex items-center bg-white gap-2 p-2 rounded" style={!disponiveis.includes(cor.nome) ? { backgroundColor: "gray" } : {}}>
					<input name="cores[]" type="checkbox" title={cor.nome} value={cor.nome} disabled={!disponiveis.includes(cor.nome)} onChange={handleChange} checked={checked.includes(cor.nome)} />
					<div title={cor.nome} className="h-5 w-5 rounded-full border-2 border-gray-400" style={{ backgroundColor: cor.rgb }} />
					<span className="text-sm">{cor.nome}</span>
				</div>
			))}
		</div>
	);
}
