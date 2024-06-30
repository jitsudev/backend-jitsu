"use client";

import { useFormState } from "react-dom";
import { createProduto } from "../actions";
import { SubmitButton } from "@/app/components/submitButton";
import CoresDisponiveis from "./cores";
import Link from "next/link";

type FormStateType = {
	message: String;
	error: String;
};

export default function FormCreateProdutoBase() {
	const initialState: FormStateType = {
		message: "",
		error: "",
	};

	const [formstate, formAction] = useFormState(createProduto, initialState);

	return (
		<form action={formAction} method="POST" className="flex flex-col gap-4" encType="application/json">
			<input type="text" name="name" placeholder="Camisa Quality" className="rounded p-2" />
			<input type="text" name="cost" placeholder="39,90" className="rounded p-2" />
			<input type="text" name="composition" placeholder="100% Algodão" className="rounded p-2" />
			<input type="text" name="sku" placeholder="01101" className="rounded p-2" />
			<div className="flex border-2 rounded p-2 justify-center items-center">
				<CoresDisponiveis />
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
				<SubmitButton className="bg-green-500 rounded w-2/4 text-white p-2">Adicionar Produto</SubmitButton>
			</div>
		</form>
	);
}
