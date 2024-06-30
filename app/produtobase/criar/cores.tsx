"use client";
import { CORES, Cor } from "@/app/util/dimona";
import { ChangeEvent, useState } from "react";

export default function CoresDisponiveis({ cores }: { cores?: string }) {
	const initial = cores ? cores.split(",") : CORES.map((cor) => cor.nome);
	const [checked, setChecked] = useState<Array<string>>(initial);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			var newchecked = [...checked];
			newchecked.push(e.currentTarget.value);
			setChecked(newchecked);
		} else {
			setChecked([...checked].filter((s) => s != e.currentTarget.value));
		}
	};
	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<span className="text-white">Selecione as cores disponíveis para este produto:</span>
			<div className="flex gap-4 flex-wrap w-full">
				{CORES.map((cor: Cor) => (
					<div className="flex gap-1">
						<input name="cores[]" type="checkbox" title={cor.nome} value={cor.nome} onChange={handleChange} checked={checked.includes(cor.nome)} />
						<div title={cor.nome} className="h-7 w-7 rounded-full border-2 border-gray-400" style={{ backgroundColor: cor.rgb }} />
					</div>
				))}
			</div>
		</div>
	);
}
