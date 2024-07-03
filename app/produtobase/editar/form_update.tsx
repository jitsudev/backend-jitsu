"use client";

import { ProdutoBase } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateProduto, stateType } from "../actions";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SeletorCores from "../ui/seletor_cores";
import SeletorTamanhos from "../ui/seletor_tamanhos";
import { SubmitButton } from "@/app/components/submitButton";

export default function FormUpdateProdutoBase({ produto }: { produto: ProdutoBase }) {
	const router = useRouter();
	const initialState: stateType = {
		message: "",
		error: "",
	};

	const [state, setState] = useState<ProdutoBase>(produto);

	const [formstate, formAction] = useFormState(updateProduto, initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
	};

	useEffect(() => {
		if (formstate.message == "ok") {
			router.push("/produtobase");
		}
	}, [formstate]);

	return (
		<form action={formAction} method="POST" className="flex flex-col gap-4" encType="application/json">
			<input type="hidden" name="id" value={state.id} />
			<input type="text" name="name" placeholder="Camisa Quality" className="rounded p-2" value={state.name} onChange={handleChange} />
			<input type="text" name="cost" placeholder="39,90" className="rounded p-2" value={state.cost} onChange={handleChange} />
			<input type="text" name="composition" placeholder="100% Algodão" className="rounded p-2" value={state.composition} onChange={handleChange} />
			<SeletorCores produto={state.name} selected={state.cores.split(",")} />
			<SeletorTamanhos produto={state.name} selected={state.tamanhos.split(",")} />
			{formstate.error ? (
				<div className="flex w-full bg-red-200 rounded p-4 justify-center items-center">
					<span>{formstate.error}</span>
				</div>
			) : null}
			<div className="flex justify-between">
				<Link href={"/produtobase"} className="bg-gray-400 p-2 rounded text-center w-1/4">
					Voltar
				</Link>
				<SubmitButton className="bg-green-500 rounded w-2/4 text-white p-2">Atualizar Produto</SubmitButton>
			</div>
		</form>
	);
}
