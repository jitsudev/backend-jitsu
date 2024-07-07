import prisma from "@/app/client";
import MockupCard from "./mockup_card";
import { Suspense } from "react";
import FormCreateMockup from "./form_create";

const Loading = () => <div className="flex h-[180px] w-[135px] bg-gray-200 rounded overflow-hidden items-center justify-center">Loading</div>;

export default async function Page() {
	const mockups = await prisma.mockup.findMany();
	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="flex gap-2">
				{mockups?.map((mockup) => (
					<Suspense key={mockup.id} fallback={<Loading />}>
						<MockupCard mockup={mockup} />
					</Suspense>
				))}
			</div>
			<FormCreateMockup />
		</div>
	);
}
