export default function ColorSelector({ colors }: { colors?: Array<string> }) {
	return (
		<div className="flex text-white gap-4 justify-between items-center">
			{colors?.map((color, i) => (
				<div key={i} className="flex items-center gap-1">
					<input type="checkbox" value={color} />
					{color}
				</div>
			))}
		</div>
	);
}
