import React, { useState } from "react";
import "./Box.css";
import { ReactComponent as BR } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BR.svg";
import { ReactComponent as BN } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BN.svg";
import { ReactComponent as BP } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BP.svg";
import { ReactComponent as BK } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BK.svg";
import { ReactComponent as BQ } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BQ.svg";
import { ReactComponent as BB } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/BB.svg";
import { ReactComponent as WR } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WR.svg";
import { ReactComponent as WN } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WN.svg";
import { ReactComponent as WP } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WP.svg";
import { ReactComponent as WK } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WK.svg";
import { ReactComponent as WQ } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WQ.svg";
import { ReactComponent as WB } from "../../../JohnPablok Cburnett Chess set/SVG No shadow/WB.svg";

const piecesComponents = {
  BR: <BR />,
  BN: <BN />,
  BP: <BP />,
  BK: <BK />,
  BQ: <BQ />,
  BB: <BB />,
  WR: <WR />,
  WN: <WN />,
  WP: <WP />,
  WK: <WK />,
  WQ: <WQ />,
  WB: <WB />,
};

const Box = ({ id, black, piecesOnBoard, setPiecesOnBoard }) => {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const pieceInfo = piecesOnBoard.find((piece) => piece.endsWith(id));
  let pieceComponent = null;

  if (pieceInfo) {
    const piece = pieceInfo.slice(0, 2);
    pieceComponent = piecesComponents[piece];
  }

  const movePiece = (id) => {
    const pieceInfo = piecesOnBoard.find((piece) => piece.endsWith(id));
    console.log({ selectedPiece });
    if (selectedPiece) {
      setPiecesOnBoard(
        piecesOnBoard.map((piece) => {
          console.log("piece: ", piece, " selectedPiece: ", selectedPiece);
          if (piece === selectedPiece) {
            console.log("MOVING THIS",selectedPiece.slice(0, 2) + id);
            return selectedPiece.slice(0, 2) + id;
          }
          return piece;
        })
      );
      setSelectedPiece(null);
    }

    if (pieceInfo && pieceInfo.slice(0, 2) !== "  ") {
      if (selectedPiece === pieceInfo) {
        setSelectedPiece(null);
      } else {
        setSelectedPiece(pieceInfo);
      }
    }
  };

  return (
    <div
      className={`Box ${black ? "Black" : ""}`}
      onClick={() => movePiece(id)}
    >
      {pieceComponent && <div className="Piece">{pieceComponent}</div>}
    </div>
  );
};

export default Box;
