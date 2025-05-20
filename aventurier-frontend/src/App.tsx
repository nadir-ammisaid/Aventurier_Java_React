import { useEffect, useState } from "react";
import type { Position } from "./types";
import MapGrid from "./components/MapGrid";
import ControlPanel from "./components/ControlPanel";

function App() {
	const [map, setMap] = useState<string[]>([]);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

	useEffect(() => {
		fetch("http://localhost:8080/api/map")
			.then((res) => res.json())
			.then(setMap);

		fetch("http://localhost:8080/api/initial-position")
			.then((res) => res.json())
			.then(setPosition);
	}, []);

	const move = (dir: string) => {
		fetch("http://localhost:8080/api/new-position", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				direction: dir,
				lastPosition: position,
			}),
		})
			.then((res) => res.json())
			.then(setPosition);
	};

	return (
		<div className="app-container">
			<MapGrid map={map} position={position} />
			<ControlPanel onMove={move} />
		</div>
	);
}

export default App;
