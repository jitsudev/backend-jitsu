"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { removeImage } from "./actions";

import { CircleX, File, Upload } from "lucide-react";
import { UploadButton } from "@/app/components/uploadthing";
import { UploadedFileData } from "uploadthing/types";

export default function Mockup({ produto, cor, posicao }: { produto: string; cor: string; posicao: string }) {
	const [imageKey, setImageKey] = useState<string>();
	const [selectedImage, setSelectedImage] = useState<UploadedFileData | null>();

	// const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.files && e.target.files.length > 0) {
	// 		setSelectedImage(e.target.files[0]);
	// 	}
	// };

	const handleClick = async (key: string) => {
		const res = await removeImage(key);
		if (res?.success) {
			setSelectedImage(null);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div>{posicao}</div>
			<div className="h-full w-[200px] bg-gray-200 rounded overflow-hidden">{selectedImage && <Image src={selectedImage.url} style={{}} height={180} width={135} alt="Thumb" className="h-full w-auto bg-cover" />}</div>

			<UploadButton
				endpoint="stampUploader"
				onClientUploadComplete={(res) => {
					console.log(res);
					setSelectedImage(res[0]);
					setImageKey;
				}}
				onUploadError={(error: Error) => {
					alert(`ERROR! ${error.message}`);
				}}
			/>

			{selectedImage && (
				<button className="bg-red-500 rounded text-white p-2" onClick={() => handleClick(selectedImage.key)}>
					<CircleX size={22} />
				</button>
			)}
		</div>
	);
}
