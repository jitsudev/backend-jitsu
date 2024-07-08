"use client";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { deleteMockup } from "./actions";
import { Mockup } from "@prisma/client";
import CorCircle from "@/app/components/cor_circle";

export default function MockupCard({ mockup }: { mockup: Mockup }) {
	return (
		<>
			<div className="flex flex-col bg-white rounded items-center justify-between overflow-hidden mr-[-2.5rem]">
				<Image src={mockup.url} height={180} width={135} alt={mockup.descricao} className="w-auto" />

				<div className="flex items-center p-2 gap-2">
					<CorCircle nome={mockup.cor} />
					<span className="text-sm">{mockup.produto}</span>
				</div>
			</div>
			<button className="flex justify-center items-center bg-red-500 h-8 w-8 text-white p-2 rounded" onClick={() => deleteMockup(mockup)}>
				<CircleX size={22} />
			</button>
		</>
	);
}
