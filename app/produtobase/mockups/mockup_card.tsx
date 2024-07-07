import Image from "next/image";

export default function MockupCard({ mockup }: { mockup: { produto: string; cor: string; posicao: string; url: string } }) {
	return (
		<div className="flex flex-col bg-white rounded items-center overflow-hidden">
			<Image src={mockup.url} height={180} width={135} alt={mockup.produto + mockup.cor} />
			<span className="text-sm">{mockup.produto}</span>
			<span className="text-xs">{mockup.cor}</span>
		</div>
	);
}
