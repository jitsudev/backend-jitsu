"use client";

import { ProdutoBase } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateProduto } from "../actions";
import { SubmitButton } from "@/app/components/submitButton";
import CoresDisponiveis from "../criar/cores_disponiveis";
import { ChangeEvent, useState } from "react";
import { updateProp } from "@/app/util/tools";
import Link from "next/link";

type FormStateType = {
	message: String;
	error: String;
};

export default function FormUpdateProdutoBase({ produto }: { produto: ProdutoBase }) {
	const initialState: FormStateType = {
		message: "",
		error: "",
	};

	const [state, setState] = useState<ProdutoBase>(produto);

	const [formstate, formAction] = useFormState(updateProduto, initialState);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
	};

	return (
		<form action={formAction} method="POST" className="flex flex-col gap-4" encType="application/json">
			<input type="hidden" name="id" value={state.id} />
			<input type="text" name="name" placeholder="Camisa Quality" className="rounded p-2" value={state.name} onChange={handleChange} />
			<input type="text" name="cost" placeholder="39,90" className="rounded p-2" value={state.cost} onChange={handleChange} />
			<input type="text" name="composition" placeholder="100% Algodão" className="rounded p-2" value={state.composition} onChange={handleChange} />
			<input type="text" name="sku" placeholder="01101" className="rounded p-2" value={state.sku} onChange={handleChange} />
			<div className="flex border-2 rounded p-2 justify-center items-center">
				<CoresDisponiveis cores={state.cores} />
			</div>
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
