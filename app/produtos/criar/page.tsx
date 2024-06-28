import ProductPrice from "@/app/components/product_price";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col justify-between w-full">
			<span>Selecione o tipo de produto:</span>
			<form action="" className="flex flex-col gap-4">
				<div className="flex gap-3">
					<button className="rounded-lg text-white p-2 border-2">Camisa</button>
					<button className="rounded-lg text-white p-2 border-2">Regata</button>
					<button className="rounded-lg text-white p-2 border-2">Babylook</button>
					<button className="rounded-lg text-white p-2 border-2">Moleton</button>
				</div>
				<div>
					Título: <input type="text" name="title" placeholder="Ex. Camisa Masculina - Armlock" />
				</div>

				<div>
					<span>Tamanhos disponíveis:</span>
					<div className="flex gap-4">
						<div>
							<input type="checkbox" name="size" value={"P"} checked />P
						</div>
						<div>
							<input type="checkbox" name="size" value={"M"} checked />M
						</div>
						<div>
							<input type="checkbox" name="size" value={"G"} checked />G
						</div>
						<div>
							<input type="checkbox" name="size" value={"GG"} checked />
							GG
						</div>
						<div>
							<input type="checkbox" name="size" value={"XGG"} checked />
							XGG
						</div>
						<div>
							<input type="checkbox" name="size" value={"G1"} checked />
							G1
						</div>
						<div>
							<input type="checkbox" name="size" value={"G2"} checked />
							G2
						</div>
						<div>
							<input type="checkbox" name="size" value={"G3"} checked />
							G3
						</div>
						<div>
							<input type="checkbox" name="size" value={"G4"} checked />
							G4
						</div>
						<div>
							<input type="checkbox" name="size" value={"U"} />
							Único
						</div>
					</div>
				</div>
				<div className="flex flex-col border-2 p-4">
					<div className="mb-4">Adicionar estampa relativa a variação de cor:</div>
					<div>
						Estampa:
						<input type="file" />
					</div>
					<div className="flex m-2 gap-4">
						<div>
							<input type="checkbox" name="color" value="white" />
							Branco
						</div>
						<div>
							<input type="checkbox" name="color" value="black" />
							Preto
						</div>
						<div>
							<input type="checkbox" name="color" value="yellow" />
							Amarelo
						</div>
						<div>
							<input type="checkbox" name="color" value="red" />
							Vermelho
						</div>
						<div>
							<input type="checkbox" name="color" value="navy" />
							Marinho
						</div>
						<div>
							<input type="checkbox" name="color" value="mescla" />
							Cinza Mescla
						</div>
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

				<div className="flex w-full justify-end">
					<button className="w-1/4 bg-green-500 rounded-lg p-2">Criar produto</button>
				</div>
			</form>
		</div>
	);
}
