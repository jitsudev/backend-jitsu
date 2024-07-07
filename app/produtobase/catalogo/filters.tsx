"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useState } from "react";

export default function CatalogFilters() {
	const router = useRouter();
	const [parametro, setParametro] = useState("");
	const [valor, setvalor] = useState("");
	const [ordenarpor, setOrdenarpor] = useState("sku");
	const [ordem, setOrdem] = useState("asc");

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _parametro = e.currentTarget.selectedOptions[0].value;
		setParametro(_parametro);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const _valor = e.currentTarget.value;
		setvalor(_valor);
	};

	const handleOrdemChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _ordem = e.currentTarget.selectedOptions[0].value;
		setOrdem(_ordem);
	};

	const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const _ordenarpor = e.currentTarget.selectedOptions[0].value;
		setOrdenarpor(_ordenarpor);
	};

	const search = () => {
		router.push(`?${parametro}=${valor}&ordenarpor=${ordenarpor}&ordem=${ordem}`);
	};

	useEffect(() => {
		router.push(`?${parametro}=${valor}&ordenarpor=${ordenarpor}&ordem=${ordem}`);
	}, [parametro, valor, ordenarpor, ordem]);

	return (
		<div className="flex items-center justify-between p-4 mb-2 bg-white rounded">
			<div className="flex gap-2 w-full">
				<Search size={20} />
				<span>Buscar por:</span>
				<select onChange={handleSelectChange} className="border-2 border-gray-400 rounded">
					<option value="nome" selected={parametro == "nome"}>
						Nome
					</option>
					<option value="estilo" selected={parametro == "estilo"}>
						Estilo
					</option>
					<option value="tamanho" selected={parametro == "tamanho"}>
						Tamanho
					</option>
					<option value="cor" selected={parametro == "cor"}>
						Cor
					</option>
					<option value="composicao" selected={parametro == "composicao"}>
						Composição
					</option>
					<option value="custo" selected={parametro == "custo"}>
						Custo
					</option>
					<option value="sku" selected={parametro == "sku"}>
						SKU
					</option>
				</select>

				<input type="text" value={valor} onChange={handleInputChange} className="border-2 border-gray-400 w-1/2 rounded" />
			</div>
			<div className="flex gap-2 flex-shrink-0">
				<span>Ordenar por:</span>
				<select onChange={handleOrderByChange} className="border-2 border-gray-400 rounded">
					<option value="nome" selected={ordenarpor == "nome"}>
						Nome
					</option>
					<option value="estilo" selected={ordenarpor == "estilo"}>
						Estilo
					</option>
					<option value="tamanho" selected={ordenarpor == "tamanho"}>
						Tamanho
					</option>
					<option value="cor" selected={ordenarpor == "cor"}>
						Cor
					</option>
					<option value="composicao" selected={ordenarpor == "composicao"}>
						Composição
					</option>
					<option value="custo" selected={ordenarpor == "custo"}>
						Custo
					</option>
					<option value="sku" selected={ordenarpor == "sku"}>
						SKU
					</option>
				</select>
				<select onChange={handleOrdemChange} className="border-2 border-gray-400 rounded">
					<option value="asc" selected={ordem == "asc"}>
						Crescente
					</option>
					<option value="desc" selected={ordem == "desc"}>
						Decrescente
					</option>
				</select>
			</div>
		</div>
	);
}
