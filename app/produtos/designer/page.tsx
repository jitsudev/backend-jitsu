"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { uploadFile } from "./actions";
import { useFormState } from "react-dom";

export default function Home() {
	const [formstate, formAction] = useFormState(uploadFile, { success: "" });
	const [selectedImage, setSelectedImage] = useState<File>();

	const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setSelectedImage(e.target.files[0]);
		}
	};

	return (
		<main className="flex flex-col items-center justify-center">
			<div className="flex justify-center items-center relative">
				<Image src={"/mockup.png"} height={200} width={200} alt="absolute top-0" className="" />
				{selectedImage && <Image src={URL.createObjectURL(selectedImage)} style={{}} alt="Thumb" height={80} width={80} className="absolute top-10 bg-cover mix-blend-multiply" />}
				{/* {uploaded ? <Image src={uploaded} height={80} width={80} alt="test" className="absolute top-10 bg-cover mix-blend-multiply" /> : null} */}
			</div>
			<form action={formAction}>
				<input accept="image/*" type="file" onChange={imageChange} />
				<button type="submit" className="bg-green-500 rounded text-white py-2 px-4">
					Upload !
				</button>
				{formstate?.success && <span>Uploaded</span>}
			</form>

			{/* <UploadButton
				endpoint="stampUploader"
				onClientUploadComplete={(res) => {
					console.log(res);
					setUploaded(res[0].url);
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
				className="relative"
			/> */}
		</main>
	);
}
