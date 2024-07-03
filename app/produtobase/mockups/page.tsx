"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { getCoresProduto, getNomesProdutos } from "../actions";
import CorCircle from "@/app/components/cor_circle";
import Mockup from "./mockup";

export default function Page() {
	const [cores, setCores] = useState<Array<string>>([]);
	const [produtos, setProdutos] = useState<Array<string>>([]);
	const [selected, setSelected] = useState<string>("");

	const _change = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.currentTarget.selectedOptions[0].value);
	};

	const _getCores = async (produto: string) => {
		setCores(await getCoresProduto(produto));
	};

	const _getNomes = async () => {
		setProdutos(await getNomesProdutos());
	};

	useEffect(() => {
		_getNomes();
	}, []);

	useEffect(() => {
		_getCores(selected);
	}, [selected]);

	return (
		<div>
			<select name="name" className="p-2 rounded w-full mb-3" value={selected} onChange={_change}>
				<option value="">Selecione um produto</option>
				{produtos?.map((nome, i) => (
					<option key={i} value={nome}>
						{nome}
					</option>
				))}
			</select>
			<div className="flex flex-col gap-1">
				{cores.map((cor: string, i: number) => (
					<div key={i} className="flex flex-col gap-2 bg-white rounded p-2">
						<div className="flex items-center gap-2">
							<CorCircle nome={cor} />
							<span>Mockups para o {cor}</span>
						</div>

						<div className="flex justify-between gap-2">
							<Mockup produto={selected} cor={cor} posicao="Frente" />
							<Mockup produto={selected} cor={cor} posicao="Costas" />
							<Mockup produto={selected} cor={cor} posicao="Variação" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
