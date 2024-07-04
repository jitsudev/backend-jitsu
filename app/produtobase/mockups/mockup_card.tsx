"use client";

import { Mockup as MockupType } from "@prisma/client";
import { useEffect, useState } from "react";
import { getMockup } from "./actions";
import CorCircle from "@/app/components/cor_circle";
import Image from "next/image";

export default function MockupCard({ produto, cor }: { produto: string; cor: string }) {
	const [mockup, setMockup] = useState<MockupType>();

	const _getMockup = async () => setMockup((await getMockup(produto, cor)) || undefined);

	useEffect(() => {
		_getMockup();
	}, []);
	return (
		<div className="flex w-full bg-white rounded items-start">
			<div className="flex items-center w-1/6 gap-2 p-2 ">
				<CorCircle nome={cor} />
				{cor}
			</div>
			<div className="flex gap-2 p-2">
				<div className="flex h-[180px] w-[135px] bg-gray-200 rounded overflow-hidden">{mockup && <Image src={mockup.url_frente} height={180} width={135} alt="Mockup Frente" />}</div>
				<div className="flex h-[180px] w-[135px] bg-gray-200  rounded overflow-hidden">{mockup && <Image src={mockup.url_frente} height={180} width={135} alt="Mockup Frente" />}</div>
			</div>
		</div>
	);
}
