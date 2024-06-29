import { createProduto } from "../actions";
import FormCreateProdutoBase from "./form";

export default function Page() {
	return (
		<div>
			Criar produto base
			<FormCreateProdutoBase />
		</div>
	);
}
