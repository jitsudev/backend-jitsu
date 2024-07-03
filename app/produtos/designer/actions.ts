"use server";
import utapi from "@/app/fileserver";
import { FileEsque } from "uploadthing/types";

export const imageRemove = async (imageKey: string | string[]) => {
	try {
		const { success } = await utapi.deleteFiles(imageKey);
		if (success) {
			return { success: true };
		}
	} catch (error) {
		return { success: false };
	}
};

export const uploadFile = async (formstate: { success: string }, formData: FormData) => {
	const files: File[] = formData.getAll("files") as File[];
	try {
		const res = await utapi.uploadFiles(files);
		console.log(res);
		if (res) {
			return { success: true };
		}
	} catch (error) {
		return { success: false };
	}
};
