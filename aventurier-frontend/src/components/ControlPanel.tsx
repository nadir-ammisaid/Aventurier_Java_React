import { useEffect } from "react";

type Props = {
  onMove: (direction: string) => void;
};

export default function ControlPanel({ onMove }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (!keys.includes(e.key)) return;

      e.preventDefault();

      switch (e.key) {
        case "ArrowUp":
          onMove("N");
          break;
        case "ArrowDown":
          onMove("S");
          break;
        case "ArrowLeft":
          onMove("O");
          break;
        case "ArrowRight":
          onMove("E");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onMove]);

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
