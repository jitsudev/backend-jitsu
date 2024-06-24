"use client";

import { useFormState } from "react-dom";
import { createCategory } from "@/app/actions";

export const CreateForm = () => {
	const initialState = {
		message: "",
		error: "",
	};
	const [state, formAction] = useFormState(createCategory, initialState);
	return (
		<form action={formAction} className="flex gap-2">
			<div className="flex flex-col">
				<input required name="title" className="text-white h-10 bg-transparent p-2 rounded border-solid border-2 border-white" />
				{state.error ? <span>{state.error}</span> : null}
			</div>
			<button type="submit" className="bg-white h-10 p-2 rounded hover:bg-gray-100">
				Criar
			</button>
		</form>
	);
};
