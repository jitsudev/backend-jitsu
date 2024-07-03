import { CORES } from "@/app/util/dimona";

export default function ListaCores({ cores }: { cores: Array<string> }) {
	return (
		<div className="flex flex-wrap gap-1">
			{cores?.map((cor, i) => (
				<div key={i} className="border-2 border-gray-400 rounded-full h-3 w-3" style={{ backgroundColor: CORES.filter((c) => c.nome == cor)[0].rgb }}></div>
			))}
		</div>
	);
}
