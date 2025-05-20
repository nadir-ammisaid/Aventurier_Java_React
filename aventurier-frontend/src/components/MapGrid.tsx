import type { Position } from "../types";

type Props = {
	map: string[];
	position: Position;
};

export default function MapGrid({ map, position }: Props) {
	return (
		<div className="map">
			{map.map((line, y) => (
				<div className="row" key={y}>
					{line.split("").map((char, x) => (
						<div
							key={x}
							className={`cell ${char === "#" ? "wall" : "path"} ${
								position.x === x && position.y === y ? "hero" : ""
							}`}
						>
							{position.x === x && position.y === y ? "🤠" : ""}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
