"use server";
import prisma from "@/app/client";

/**
 * Atualiza produto
 */
export async function getMockup(produto: string, cor: string) {
	return await prisma.mockup.findFirst({ where: { produto, cor } });
}
