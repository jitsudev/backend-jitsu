"use client";
import { Upload } from "lucide-react";
import { ChangeEvent, MouseEvent, useRef } from "react";
export default function CustomFileInput({ onChange }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		hiddenFileInput.current?.click();
	};

	return (
		<>
			<button onClick={handleClick} className="flex text-white gap-2 bg-blue-600 rounded px-4 py-2 hover:bg-blue-500">
				<Upload size={22} /> Selecionar imagem
			</button>
			<input ref={hiddenFileInput} type="file" name="file" className="hidden" onChange={onChange} />
		</>
	);
}
