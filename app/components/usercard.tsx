import prisma from "../client";
import { User } from "lucide-react";

export default async function UserCard() {
	const user = await prisma.user.findFirst();
	return (
		<div className="flex flex-col items-center gap-2 w-full">
			<div className="flex rounded-full justify-center items-center h-20 w-20 bg-gray-300 text-white">
				<User size={50} />
			</div>
			<div className="flex flex-col items-center">
				{user?.name}
				<div className="text-xs">{user?.email}</div>
			</div>
		</div>
	);
}
