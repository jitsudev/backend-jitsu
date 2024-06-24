import CategoryList from "./categoryList";
import { CreateForm } from "./createForm";

export default async function Page() {
	return (
		<div className="flex flex-col w-full gap-10">
			<h1>Categorias</h1>
			<CategoryList />
			<CreateForm />
		</div>
	);
}
