"use client";

import { useFormState } from "react-dom";
import { createCategory } from "@/app/actions";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitButton } from "@/app/components/submitButton";

export const CreateForm = () => {
	const initialState = {
		message: "",
		error: "",
	};

	const [state, formAction] = useFormState(createCategory, initialState);
	const [title, setTitle] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setTitle(e.currentTarget.value);
	}

	useEffect(() => {
		console.log(state.message);
		if (state.message == "ok") {
			setTitle("");
		}
	}, [state]);

	return (
		<form action={formAction} className="flex gap-2">
			<div className="flex flex-col">
				<input required name="title" value={title} onChange={handleChange} className="text-white h-10 bg-transparent p-2 rounded border-solid border-2 border-white" />
				{state.error ? <span>{state.error}</span> : null}
			</div>
			<SubmitButton className="bg-white h-10 p-2 rounded hover:bg-gray-100">Criar</SubmitButton>
		</form>
	);
};
