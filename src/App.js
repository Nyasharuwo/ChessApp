import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { INITIAL_CHESS_BOARD } from "./utils/consts";

function App() {
  const [piecesOnBoard, setPiecesOnBoard] = useState(INITIAL_CHESS_BOARD);
  return (
    <div className="App">
      <Board
        piecesOnBoard={piecesOnBoard}
        setPiecesOnBoard={setPiecesOnBoard}
      />
    </div>
  );
}

export default App;
