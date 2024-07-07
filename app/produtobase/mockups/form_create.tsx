"use client";
import { useFormState } from "react-dom";
import { createMockup, FormStateType } from "./actions";
import SeletorCor from "../(ui)/seletor_cor";
import { SubmitButton } from "@/app/components/submitButton";
import { ChangeEvent, useEffect, useState } from "react";
import SeletorProdutos from "../(ui)/seletor_produtos";
import { getCoresProduto } from "../actions";

export default function FormCreateMockup() {
	const initialState: FormStateType = {
		message: "",
		error: "",
	};
	const [selected, setSelected] = useState<string>("");
	const [cores, setCores] = useState<Array<string>>([]);
	const [formstate, formAction] = useFormState<FormStateType>(createMockup, initialState);
	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => setSelected(e.currentTarget.selectedOptions[0].value);

	const _getCores = async () => setCores(await getCoresProduto(selected));

	useEffect(() => {
		_getCores();
	}, [selected]);

	return (
		<>
			<span>Adicionar mockup</span>
			<form action={formAction} className="flex flex-col gap-2">
				<div className="flex gap-2 w-full">
					<SeletorProdutos name="produto" onChange={handleChange} />
					<SeletorCor cores={cores} />
				</div>
				<label htmlFor="posicao">Descrição da foto:</label>
				<input type="text" name="posicao" className="border-2 p-2 rounded" placeholder="Ex: Frente" />
				<input type="file" name="mockup" />
				{formstate.error && (
					<div className="flex w-full bg-red-200 rounded p-4 justify-center items-center">
						<span>{formstate.error}</span>
					</div>
				)}
				<SubmitButton className="bg-green-500 px-4 py-2 rounded">Inserir</SubmitButton>
			</form>
		</>
	);
}
