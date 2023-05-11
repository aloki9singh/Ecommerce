import Board from "./Components/Board";
import "./App.css";
import "./styles.scss";
import { useState } from "react";
import { CalculateWinner } from "./Components/Winner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = CalculateWinner(squares);
  const nextPlayer = isXNext ? "X" : "O";
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

  const handleSquareClick = (Clickedposition) => {
    //it is for on Click again the value doesnt changes

    if (squares[Clickedposition] || winner) {
      return;
    }

    setSquares((currentsquares) => {
      return currentsquares.map((squareValue, position) => {
        if (Clickedposition == position) {
          return isXNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setIsXNext((currentXnext) => !currentXnext);
  };
  return (
    <div className="app">
      <h2>Next player is {nextPlayer}</h2>
      <Board handleSquareClick={handleSquareClick} squares={squares} />
    </div>
  );
}

export default App;
