export default function SeletorCor({ cores }: { cores: Array<string> }) {
	return (
		<select name="cor" className="flex w-full">
			<option value="" selected>
				Selecione uma cor
			</option>
			{cores.map((c) => (
				<option key={c} value={c}>
					{c}
				</option>
			))}
		</select>
	);
}
