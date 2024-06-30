"use server";
import prisma from "../client";
import { ProdutoBase } from "@prisma/client";
import { ExecException } from "child_process";
import { error } from "console";
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
	return _array;
}

export async function createProduto(previousState: stateType, formData: FormData) {
	const name = formData.get("name") as string;
	const cost = formData.get("cost") as string;
	const composition = formData.get("composition") as string;
	const sku = formData.get("sku") as string;
	var cores = ArrayToString("cores[]", formData);

	if (!name || !cost || !composition || !sku || cores.length == 0) {
		return { message: "", error: "Os campos não podem ficar em branco" };
	}

	const existing = await prisma.produtoBase.findFirst({ where: { name: name.toLocaleLowerCase() } });

	if (existing) {
		return { message: "", error: "Este produto já existe" };
	}

	const _produto = await prisma.produtoBase.create({
		data: {
			name,
			cost,
			composition,
			sku,
			cores: cores.join(","),
		},
	});

	revalidatePath("/produtobase");
	redirect("/produtobase");
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
	const sku = formData.get("sku") as string;
	var cores = ArrayToString("cores[]", formData);

	if (!name || !cost || !composition || !sku || cores.length == 0) {
		return { message: "", error: "Os campos não podem ficar em branco" };
	}

	const existing = await prisma.produtoBase.findFirst({ where: { name: { contains: name, mode: "insensitive" }, id: { not: _id } } });

	if (existing) {
		return { message: "", error: "Este produto já existe" };
	}

	const _produto = await prisma.produtoBase.update({ where: { id: _id }, data: { name, cost, composition, sku, cores: cores.join(",") } });
	revalidatePath("/produtobase");
	redirect("/produtobase");
}
