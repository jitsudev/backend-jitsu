"use client";

import { useRouter } from "next/navigation";

export function CloseButton({ children, className }: { children: React.ReactNode; className?: string }) {
	const router = useRouter();

	return (
		<>
			<button
				className={className}
				onClick={() => {
					router.back();
				}}>
				{children}
			</button>
		</>
	);
}
