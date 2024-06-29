"use client";

import { ProdutoBase } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateProduto } from "../actions";
import { SubmitButton } from "@/app/components/submitButton";
import CoresDisponiveis from "../criar/cores";
import { ChangeEvent, useState } from "react";
import { updateProp } from "@/app/util/tools";

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
			{formstate.error ? <span>{formstate.error}</span> : null}
			<input type="hidden" name="id" value={state.id} />
			<input type="text" name="name" placeholder="Camisa Quality" className="rounded p-2" value={state.name} onChange={handleChange} />
			<input type="text" name="cost" placeholder="39,90" className="rounded p-2" value={state.cost} onChange={handleChange} />
			<input type="text" name="composition" placeholder="100% Algodão" className="rounded p-2" value={state.composition} onChange={handleChange} />
			<input type="text" name="sku" placeholder="01101" className="rounded p-2" value={state.sku} onChange={handleChange} />
			<div className="flex border-2 rounded p-2 justify-center items-center">
				<CoresDisponiveis cores={state.cores} />
			</div>

			<SubmitButton className="bg-green-500 rounded text-white p-2">Atualizar Produto</SubmitButton>
		</form>
	);
}
