import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { INITIAL_CHESS_BOARD } from "./utils/consts";
//import io from "socket.io-client";
//import Chat from "./Chat";

function App() {
  const [piecesOnBoard, setPiecesOnBoard] = useState(INITIAL_CHESS_BOARD);
 //const [currentPlayer, setCurrentPlayer] = useState("white");
 // const [chatMessages, setChatMessages] = useState([]);
 //  const [message, setMessage] = useState("");

  useEffect(() => {
   
    socket.on("board", (updatedBoard) => {
      setBoard(updatedBoard);
    });

    socket.on("playerTurn", (player) => {
      setCurrentPlayer(player);
    });

    socket.on("chatMessage", (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });
    
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
