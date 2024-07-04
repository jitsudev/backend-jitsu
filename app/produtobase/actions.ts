"use server";
import prisma from "../client";
import { Catalogo, ProdutoBase } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type stateType = {
	message: string;
	error: string;
};

function ArrayToString(name: string, formData: FormData) {
	var _array = [] as Array<string>;
	const data = formData.forEach((_value, _name) => {
		console.log(_name, _value);
		if (_name == name) {
			_array.push(_value as string);
		}
	});
	return _array.join(",");
}

export async function createProduto(previousState: stateType, formData: FormData) {
	const name = formData.get("name") as string;
	const cost = formData.get("cost") as string;
	const composition = formData.get("composition") as string;

	var cores = ArrayToString("cores[]", formData);
	var tamanhos = ArrayToString("tamanhos[]", formData);

	if (!name || !cost || !composition || cores.length == 0 || tamanhos.length == 0) {
		return { message: "", error: "Os campos não podem ficar em branco" };
	}

	const existing = await prisma.produtoBase.findFirst({ where: { name, composition, cost, cores, tamanhos } });

	if (existing) {
		return { message: "", error: "Um produto semelhante a este já existe" };
	}

	const _produto = await prisma.produtoBase.create({
		data: {
			name,
			cost,
			composition,
			cores,
			tamanhos,
		},
	});

	revalidatePath("/produtobase");

	return { message: "ok", error: "" };
}

export async function deleteProduto(produto: ProdutoBase) {
	const _produto = await prisma.produtoBase.delete({ where: { id: produto.id } });
	revalidatePath("/produtobase");
	redirect("/produtobase");
}

export async function deleteProdutoFromModal(previousState: stateType, formData: FormData) {
	const id = parseInt(formData.get("id") as string);
	const _produto = await prisma.produtoBase.delete({ where: { id } });
	revalidatePath("/produtobase");
	return { message: "ok", error: "" };
}

export async function updateProduto(previousState: stateType, formData: FormData) {
	const _id = parseInt(formData.get("id") as string);
	const name = formData.get("name") as string;
	const cost = formData.get("cost") as string;
	const composition = formData.get("composition") as string;
	var cores = ArrayToString("cores[]", formData);
	var tamanhos = ArrayToString("tamanhos[]", formData);

	if (!name || !cost || !composition || !cores || !tamanhos) {
		return { message: "", error: "Os campos não podem ficar em branco" };
	}

	const existing = await prisma.produtoBase.findFirst({ where: { name, composition, cost, cores, tamanhos, id: { not: _id } } });

	if (existing) {
		return { message: "", error: "Um produto semelhante a este já existe" };
	}

	const _produto = await prisma.produtoBase.update({ where: { id: _id }, data: { name, cost, composition, cores, tamanhos } });
	revalidatePath("/produtobase");
	return { message: "ok", error: "" };
}

/**
 * Retorna um array com todos os produtos
 */
export async function getCatalog() {
	return await prisma.catalogo.findMany();
}

/**
 * Retorna um array com todos os produtos de mesmo nome
 */
export async function getProdutosByNome(nome: string) {
	return await prisma.catalogo.findMany({ where: { nome } });
}

/**
 * Retorna um array com os nomes distintos dos produtos
 */
export async function getNomesProdutos() {
	return (await prisma.catalogo.findMany({ where: {}, distinct: "nome" })).flatMap(({ nome }) => nome);
}

/**
 * Retorna um array com as cores distintas dos produtos com mesmo nome
 */
export async function getCoresProduto(nome: string) {
	return (await prisma.catalogo.findMany({ where: { nome }, distinct: "cor" })).flatMap(({ cor }) => cor);
}

/**
 * Retorna um array com os Tamanhos distintos dos produtos com mesmo nome
 */
export async function getTamanhosProduto(nome: string) {
	return (await prisma.catalogo.findMany({ where: { nome }, distinct: "tamanho" })).flatMap(({ tamanho }) => tamanho);
}
