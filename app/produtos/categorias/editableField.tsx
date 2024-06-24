"use client";

import { updateCategory } from "@/app/actions";
import debounce from "lodash.debounce";

import { ChangeEvent, useCallback, useState } from "react";

export const EditableCategoryField = ({ id, value, delay }: { id: number; value: string; delay?: number }) => {
	const [title, setTitle] = useState(value);

	const debouncedChangeHandler = useCallback(
		debounce((newValue) => {
			updateCategory(id, newValue);
			console.log("Category " + id + " updated");
		}, delay || 500),
		[]
	);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const _value = e.currentTarget.value;
		setTitle(_value);
		debouncedChangeHandler(_value);
	}

	return (
		<div>
			<input value={title} onChange={handleChange} className="bg-transparent border-none p-1 capitalize focus:bg-white" />
		</div>
	);
};
