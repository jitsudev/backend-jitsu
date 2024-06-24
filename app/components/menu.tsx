import Link from "next/link";

export default async function Menu() {
	return (
		<nav>
			<ul
				className="flex flex-col gap-3
            ">
				<li>
					<Link href="/" className="hover:underline">
						Dashboard
					</Link>
				</li>
				<li>
					<Link href="/pedidos">Pedidos</Link>
				</li>
				<li>
					<span>Produtos</span>
					<ul className="flex flex-col ml-3">
						<li>
							<Link href="/produtos">Listagem</Link>
						</li>
						<li>
							<Link href="/produtos/criar">Criar produto</Link>
						</li>
						<li>
							<Link href="/produtos/categorias">Categorias</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link href="/clientes">Clientes</Link>
				</li>
				<li>
					<Link href={"/store"}>Loja</Link>
				</li>
			</ul>
		</nav>
	);
}
