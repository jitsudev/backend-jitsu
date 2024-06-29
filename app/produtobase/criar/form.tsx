"use client";

import { ProdutoBase } from "@prisma/client";
import { useFormState } from "react-dom";
import { createProduto } from "../actions";
import { SubmitButton } from "@/app/components/submitButton";
import CoresDisponiveis from "./cores";

type FormStateType = {
	message: String;
	error: String;
};

export default function FormCreateProdutoBase() {
	const initialState: FormStateType = {
		message: "",
		error: "",
	};

	const [state, formAction] = useFormState(createProduto, initialState);

	return (
		<form action={formAction} method="POST" className="flex flex-col gap-4" encType="application/json">
			{state.error ? <span>{state.error}</span> : null}
			<input type="text" name="name" placeholder="Camisa Quality" className="rounded p-2" />
			<input type="text" name="cost" placeholder="39,90" className="rounded p-2" />
			<input type="text" name="composition" placeholder="100% Algodão" className="rounded p-2" />
			<input type="text" name="sku" placeholder="01101" className="rounded p-2" />
			<div className="flex border-2 rounded p-2 justify-center items-center">
				<CoresDisponiveis />
			</div>

			<SubmitButton className="bg-green-500 rounded text-white p-2">Adicionar Produto</SubmitButton>
		</form>
	);
}
