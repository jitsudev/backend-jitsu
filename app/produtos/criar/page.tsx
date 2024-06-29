import CategorySelect from "@/app/components/category_selector";
import ColorSelector from "@/app/components/color_selector";
import ProductPrice from "@/app/components/product_price";
import SizeSelect from "@/app/components/sizes_selector";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col justify-between w-full">
			<span className="text-white mb-2">Selecione o tipo de produto:</span>
			<form action="" className="flex flex-col gap-4">
				<div className="flex gap-3">
					<button className="rounded-lg text-white p-2 border-2">Camisa</button>
					<button className="rounded-lg text-white p-2 border-2">Regata</button>
					<button className="rounded-lg text-white p-2 border-2">Babylook</button>
					<button className="rounded-lg text-white p-2 border-2">Moleton</button>
				</div>
				<div className="flex flex-col text-white">
					Título: <input type="text" name="title" placeholder="Ex. Camisa Masculina - Armlock" className="w-full p-2 bg-transparent text-white rounded border-2" />
				</div>

				<div>
					<span className="text-white mb-2">Tamanhos disponíveis:</span>
					<SizeSelect initialSizes={["P", "M", "G", "GG", "XGG", "G4", "U"]} />
				</div>
				<div className="flex flex-col border-2 p-4">
					<div className="mb-4">Adicionar estampa relativa a variação de cor:</div>
					<div>
						Estampa:
						<input type="file" />
					</div>
					<div className="flex m-2 gap-4">
						<span>Cores disponíveis para este produto:</span>
						<ColorSelector colors={["Preto", "Branco"]} />
					</div>
					<div>Preview</div>
					<button className="bg-green-500 rounded-lg p-2">Adicionar</button>
					<div className="mt-2 mb-2">Variações adicionadas:</div>
					<div className="flex gap-3">
						{[...Array(4)].map((e, i) => (
							<div key={i}>
								<Image src={"/mockup.png"} width={100} height={150} alt="Mockup" className="mb-[-28px]" />
								<button className="relative bg-red-500 text-white p-2 rounded-full">
									<Trash2 size={12} />
								</button>
							</div>
						))}
					</div>
				</div>
				<ProductPrice price={{ price: 70, discountType: "valor", discount: 5 }} />
				<div className="flex flex-col text-white w-full">
					Categorias: <CategorySelect />
				</div>
				<div className="flex w-full justify-end">
					<button className="w-1/4 bg-green-500 rounded-lg p-2">Criar produto</button>
				</div>
			</form>
		</div>
	);
}
