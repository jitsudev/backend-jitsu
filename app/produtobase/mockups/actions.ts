"use server";
import prisma from "@/app/client";
import utapi from "@/app/fileserver";
import { Mockup } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type FormStateType = {
	message: string;
	error: string;
};

/**
 * Retorna Mockups
 */
export async function getMockups() {
	return await prisma.mockup.findMany();
}

/**
 * Retorna Mockups por produto
 */
export async function getMockupsByProduct(produto: string) {
	return await prisma.mockup.findMany({ where: { produto } });
}

/**
 * Retorna Mockups por produto e cor
 */
export async function getMockup(produto: string, cor: string) {
	return await prisma.mockup.findMany({ where: { produto, cor } });
}

export async function createMockup(previousState: FormStateType, formData: FormData) {
	const _produto = formData.get("produto") as string;
	const _cor = formData.get("cor") as string;
	const _descricao = formData.get("descricao") as string;
	const _mockup = formData.getAll("file") as File[];
	console.log(_produto, _cor, _descricao, _mockup);
	// Upload imagem

	if (!_produto || !_cor || !_descricao || !_mockup) return { message: "", error: "Os campos não podem ficar em branco" };

	const _upload = await utapi.uploadFiles(_mockup);
	const { data } = _upload[0];
	if (data) {
		const _mockup = await prisma.mockup.create({ data: { produto: _produto, cor: _cor, descricao: _descricao, url: data.url, key: data.key } });
		if (_mockup) {
			revalidatePath("/produtobase/mockups");
			return { message: "ok", error: "" };
		} else {
			return { message: "", error: "Falha ao criar mockup" };
		}
	}

	return { message: "ok", error: "" };
}

export async function deleteMockup(mockup: Mockup) {
	const _del = await utapi.deleteFiles(mockup.key);
	if (_del.success) {
		const _mockup = await prisma.mockup.delete({ where: { id: mockup.id } });
		if (_mockup) {
			revalidatePath("/produtobase/mockups");
		}
	}
}
