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
		return { message: "", error: "O campo não pode ficar em branco" };
	}

	const categoria = await prisma.categoria.create({
		data: {
			title: title,
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
