"use server";
import prisma from "./client";
import { revalidatePath } from "next/cache";

export type stateType = {
	message: String;
	error: String;
};

export async function createCategory(previousState: stateType, formData: FormData) {
	const title = formData.get("title") as string;

	if (title == "") {
	}

	const existing = await prisma.categoria.findFirst({ where: { title: title.toLocaleLowerCase() } });

	if (existing) {
		return { message: "", error: "Esta categoria já existe" };
	}

	const categoria = await prisma.categoria.create({
		data: {
			title: title.toLocaleLowerCase(),
		},
	});

	revalidatePath("/produtos/categorias");

	return { message: "ok", error: "" };
}

export async function deleteCategory(id: number) {
	const categoria = await prisma.categoria.delete({ where: { id: id } });
	revalidatePath("/produtos/categorias");
	return { message: "ok" };
}

export async function updateCategory(id: number, title: string) {
	const upd = await prisma.categoria.update({ where: { id: id }, data: { title: title.toLocaleLowerCase() } });
	revalidatePath("/produtos/categorias");
	return { message: "ok" };
}
