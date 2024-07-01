"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { getNomesProdutos, getCoresProduto, getTamanhosProduto, createProduto, stateType } from "../actions";

import CoresDisponiveis from "./cores_disponiveis";
import TamanhosDisponiveis from "./tamanhos_disponiveis";
import { useFormState } from "react-dom";

export default function FormCreate() {
	const initialState = {
		message: "ok",
		error: "",
	};

	const [formstate, formAction] = useFormState<stateType>(createProduto, initialState);
	const [nomes, setNomes] = useState<Array<string>>(["Carregando"]);
	const [selected, setSelected] = useState<string>("");
	const [cores, setCores] = useState<Array<string>>([]);
	const [tamanhos, setTamanhos] = useState<Array<string>>([]);

	const handleNomes = async () => {
		setNomes(await getNomesProdutos());
	};

	const handleCores = async (_selected: string) => {
		setCores(await getCoresProduto(_selected));
	};

	const handleTamanhos = async (_selected: string) => {
		setTamanhos(await getTamanhosProduto(_selected));
	};

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _selected = e.currentTarget.selectedOptions[0].value;
		handleCores(_selected);
		handleTamanhos(_selected);
		setSelected(_selected);
	};

	useEffect(() => {
		handleNomes();
	}, [selected]);

	return (
		<form action={formAction} method="POST">
			<div className="flex flex-col gap-2">
				<div>
					<span>Selecione um produto do catálogo:</span>
					<select name="name" className="p-2 rounded w-full" value={selected} onChange={handleChange}>
						<option value="">Selecione um produto</option>
						{nomes?.map((nome, i) => (
							<option key={i} value={nome}>
								{nome}
							</option>
						))}
					</select>
				</div>

				<div>
					<span>Custo:</span>
					<input name="cost" className="w-full rounded p-2" />
				</div>
				<div>
					<span>Composição</span>
					<input name="composition" className="w-full rounded p-2" />
				</div>
				<div>
					<span>Cores disponíveis:</span>
					<CoresDisponiveis cores={cores} />
				</div>

				<div>
					<span>Tamanhos disponíveis:</span>
					<TamanhosDisponiveis tamanhos={tamanhos} />
				</div>
				{formstate.error ? (
					<div className="flex w-full bg-red-200 rounded p-4 justify-center items-center">
						<span>{formstate.error}</span>
					</div>
				) : null}
				<div>
					<button type="submit" className="w-full rounded p-2 bg-green-500">
						Adicionar produto
					</button>
				</div>
			</div>
		</form>
	);
}
