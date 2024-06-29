import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import UserCard from "./components/usercard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex bg-gray-500 h-full">
					<div className="flex flex-col gap-5 w-2/12 bg-white p-5">
						<UserCard />
						<Menu />
					</div>
					<div className="flex flex-col w-10/12 justify-start items-center p-5">{children}</div>
				</div>
			</body>
		</html>
	);
}
