"use client";

import { UploadButton } from "@/app/components/uploadthing";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [uploaded, setUploaded] = useState<string>("");

	return (
		<main className="flex flex-col items-center justify-center">
			{uploaded ? <Image src={uploaded} height={200} width={200} alt="test" /> : null}
			<UploadButton
				endpoint="stampUploader"
				onClientUploadComplete={(res) => {
					console.log(res);
					setUploaded(res[0].url);
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</main>
	);
}
