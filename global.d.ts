import { PrismaClient } from "@prisma/client";
import { UTApi } from "uploadthing/server";

declare global {
	var prisma: PrismaClient | undefined;
	var utapi: UTApi | undefined;
}
