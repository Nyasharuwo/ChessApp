import React from "react";
import Box from "./Box/Box";
import "./Board.css";
import { COLS, ROWS } from "../../utils/consts";

const Board = ({ piecesOnBoard, setPiecesOnBoard }) => {
  return (
    <div className="Board">
      {ROWS.map((row, index) => (
        <div key={index} className={`Row Row-${row}`}>
          {COLS.map((col) => {
            const isEven = (row + COLS.indexOf(col)) % 2 === 0;
            return (
              <Box
                key={`${col}${row}`}
                id={`${col}${row}`}
                black={isEven}
                piecesOnBoard={piecesOnBoard}
                setPiecesOnBoard={setPiecesOnBoard}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
