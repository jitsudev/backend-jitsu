import { CORES } from "../util/dimona";

export default function CorCircle({ nome }: { nome: string }) {
	const rgb = CORES.find((c) => c.nome == nome)?.rgb as string;
	return <div className="rounded-full h-4 w-4 border-2 border-gray-400" title={nome} style={{ backgroundColor: rgb }}></div>;
}
