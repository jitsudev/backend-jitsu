"use client";

import { ChangeEvent, useState } from "react";

export default function SizeSelect({ initialSizes }: { initialSizes?: Array<string> }) {
	const sizes = ["P", "M", "G", "GG", "XGG", "G1", "G2", "G3", "G4"];
	const [checked, setCheckedSizes] = useState<Array<string>>(initialSizes?.filter((s) => s != "U") || sizes);
	const [unico, setUnico] = useState<boolean>(initialSizes?.includes("U") || false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			var newchecked = [...checked];
			newchecked.push(e.currentTarget.value);
			setCheckedSizes(newchecked);
		} else {
			setCheckedSizes([...checked].filter((s) => s != e.currentTarget.value));
		}
	};

	const handleUnico = (e: ChangeEvent<HTMLInputElement>) => {
		setUnico(e.currentTarget.checked);
	};

	return (
		<div className="flex w-full justify-between gap-2 p-2 border-2 rounded text-white">
			{sizes.map((size, i) => (
				<div key={i} className="flex gap-1">
					<input type="checkbox" key={i} name="sizes" value={size} disabled={unico} checked={checked.includes(size) && !unico} onChange={handleChange} />
					{size}
				</div>
			))}
			<div className="flex gap-1">
				<input type="checkbox" name="sizes" value="U" checked={unico} onChange={handleUnico} />
				Único
			</div>
		</div>
	);
}
