"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { getNomesProdutos, getCoresProduto, getTamanhosProduto, createProduto, stateType } from "../actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import SeletorCores from "../ui/seletor_cores";
import SeletorTamanhos from "../ui/seletor_tamanhos";

export default function FormCreate() {
	const router = useRouter();
	const initialState = {
		message: "",
		error: "",
	};

	const [formstate, formAction] = useFormState(createProduto, initialState);
	const [nomes, setNomes] = useState<Array<string>>(["Carregando"]);
	const [selected, setSelected] = useState<string>("");

	const handleNomes = async () => {
		setNomes(await getNomesProdutos());
	};

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _selected = e.currentTarget.selectedOptions[0].value;

		setSelected(_selected);
	};

	useEffect(() => {
		handleNomes();
	}, [selected]);

	useEffect(() => {
		if (formstate.message == "ok") {
			router.push("/produtobase");
		}
	}, [formstate]);

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
					<SeletorCores produto={selected} />
				</div>

				<div>
					<span>Tamanhos disponíveis:</span>
					<SeletorTamanhos produto={selected} />
				</div>
				{formstate.error && (
					<div className="flex w-full bg-red-200 rounded p-4 justify-center items-center">
						<span>{formstate.error}</span>
					</div>
				)}
				<div>
					<button type="submit" className="w-full rounded p-2 bg-green-500">
						Adicionar produto
					</button>
				</div>
			</div>
		</form>
	);
}
