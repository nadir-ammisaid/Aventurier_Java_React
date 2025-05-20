type Props = {
	onMove: (direction: string) => void;
};

export default function ControlPanel({ onMove }: Props) {
	return (
		<div className="controls">
			<button type="button" onClick={() => onMove("N")}>
				⬆️
			</button>
			<div className="horizontal">
				<button type="button" onClick={() => onMove("O")}>
					⬅️
				</button>
				<button type="button" onClick={() => onMove("E")}>
					➡️
				</button>
			</div>
			<button type="button" onClick={() => onMove("S")}>
				⬇️
			</button>
		</div>
	);
}
