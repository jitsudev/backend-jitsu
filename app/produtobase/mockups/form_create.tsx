"use client";
import { useFormState } from "react-dom";
import { createMockup } from "./actions";
import SeletorCor from "../(ui)/seletor_cor";
import { SubmitButton } from "@/app/components/submitButton";
import { ChangeEvent, useEffect, useState } from "react";
import SeletorProdutos from "../(ui)/seletor_produtos";
import { getCoresProduto } from "../actions";
import Image from "next/image";
import CustomFileInput from "@/app/components/custom_file_input";

export default function FormCreateMockup() {
	const initialState = {
		message: "",
		error: "",
	};
	const [preview, setPreview] = useState<File>();
	const [descricao, setDescricao] = useState<string>();
	const [selected, setSelected] = useState<string>("");
	const [cores, setCores] = useState<Array<string>>([]);

	const [formstate, formAction] = useFormState(createMockup, initialState);
	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => setSelected(e.currentTarget.selectedOptions[0].value);

	const _getCores = async () => setCores(await getCoresProduto(selected));

	const loadFile = () => {};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDescricao(e.currentTarget.value);
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.currentTarget.files || e.currentTarget.files.length === 0) {
			setPreview(undefined);
			return;
		}
		setPreview(e.currentTarget.files[0]);
	};

	useEffect(() => {
		_getCores();
	}, [selected]);

	useEffect(() => {
		if (formstate.message == "ok") {
			setPreview(undefined);
			setSelected("");
			setDescricao("");
		}
	}, [formstate]);

	return (
		<>
			<span>Adicionar mockup</span>
			<form action={formAction} className="flex gap-2">
				<div className="flex flex-col w-1/3 items-center rounded overflow-hidden bg-white gap-2 p-2">
					{preview && <Image src={URL.createObjectURL(preview)} height={180} width={135} alt="" />}
					<span className="text-sm">Preview</span>
					<CustomFileInput onChange={handleFileChange} />
				</div>

				<div className="flex flex-col justify-between w-2/3 gap-2">
					<SeletorProdutos name="produto" value={selected} onChange={handleChange} />
					<SeletorCor cores={cores} />
					<label htmlFor="posicao">Descrição da foto:</label>
					<input type="text" name="descricao" className="border-2 p-2 rounded" value={descricao} placeholder="Ex: Frente" onChange={handleInputChange} />

					{formstate.error && (
						<div className="flex w-full bg-red-200 rounded p-4 justify-center items-center">
							<span>{formstate.error}</span>
						</div>
					)}
					<SubmitButton className="bg-green-500 px-4 py-2 rounded">Carregar mockup</SubmitButton>
				</div>
			</form>
		</>
	);
}
