import { useEffect, useState } from "react";
import type { Position } from "./types";
import MapGrid from "./components/MapGrid";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [map, setMap] = useState<string[]>([]);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/map`)
      .then((res) => res.json())
      .then(setMap);

    fetch(`${import.meta.env.VITE_API_URL}/api/initial-position`)
      .then((res) => res.json())
      .then(setPosition);
  }, []);

  const move = (dir: string) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/new-position`, {
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
      <header className="game-header">
        <h1>🧭 Aventurier</h1>
        <p className="subtitle">Explore la carte sans traverser les murs</p>
      </header>

      <main>
        <MapGrid map={map} position={position} />
        <ControlPanel onMove={move} />
      </main>

      <footer className="game-instructions">
        <p>
          🎮 Déplacements : utilise les <strong>boutons</strong> ou les{" "}
          <strong>flèches du clavier</strong>
        </p>
        <p>🚫 Les cases vertes sont des murs, tu ne peux pas les traverser</p>
      </footer>
    </div>
  );
}

export default App;
