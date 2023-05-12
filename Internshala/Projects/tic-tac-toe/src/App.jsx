import Board from "./Components/Board";
import "./App.css";
import "./styles.scss";
import { useState } from "react";
import { CalculateWinner } from "./Components/Winner";
import Statusmessage from "./Components/Statusmessage";
import History from "./Components/History";

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  const winner = CalculateWinner(gamingBoard.squares);
  // const nextPlayer = isXNext ? "X" : "O";
  // const statusMessage = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${nextPlayer}`;
 
  const handleSquareClick = (Clickedposition) => {
    //it is for on Click again the value doesnt changes

    if (gamingBoard.squares[Clickedposition] || winner) {
      return;
    }

    setHistory((currentHistory) => {
      //check we are traversing or not

      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastgamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastgamingState.squares.map(
        (squareValue, position) => {
          if (Clickedposition == position) {
            return lastgamingState.isXNext ? "X" : "O";
          }
          return squareValue;
        }
      );
      // return currentHistory.map((squareValue, position) => {
      //   if (Clickedposition == position) {
      //     return isXNext ? "X" : "O";
      //   }
      //   return squareValue;
      // });
  const baseState=isTraversing?currentHistory.slice(0,currentHistory.indexOf(lastgamingState)+1):currentHistory

      return baseState.concat({
        squares: nextSquareState,
        isXNext: !lastgamingState.isXNext,
      });
    });
    setCurrentMove((move) => move + 1);
    // setIsXNext((currentXnext) => !currentXnext);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      {/* <h2>Next player is {nextPlayer}</h2> */}
      <Statusmessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        handleSquareClick={handleSquareClick}
        squares={gamingBoard.squares}
      />
      <h3>Current Game history</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
