"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children, className }: { children: ReactNode; className?: string }) {
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending} className={className}>
			{children}
		</button>
	);
}
