import React, { useState } from "react";
import Square from "./Square";

const Board = ({ squares, handleSquareClick, winningsquares }) => {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  // const handleSquareClick = (Clickedposition) => {
  //   //it is for on Click again the value doesnt changes
  //   if (squares[Clickedposition]) {
  //     return;
  //   }

  //   setSquares((currentsquares) => {
  //     return currentsquares.map((squareValue, position) => {
  //       if (Clickedposition == position) {
  //         return isXNext ? "X" : "O";
  //       }
  //       return squareValue;
  //     });
  //   });
  //   setIsXNext((currentXnext) => !currentXnext);
  // };

  const renderSquare = (position) => {
    const isWinningSquare = winningsquares.includes(position);

    return (
      <Square
        squares={squares}
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
