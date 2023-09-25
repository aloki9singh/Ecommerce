import React from "react";

const Statusmessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every((ele) => ele !== null);
  const nextPlayer = isXNext ? "X" : "O";

  //   const statusMessage = winner
  //     ? `Winner is ${winner}`
  //     : `Next Player is ${nextPlayer}`;
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div >
          Winner is{" "}
          <span className={isXNext ? "text-orange" : "text-green"}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div className="winning">
          <span className="text-orange">O </span>and{" "}
          <span className="text-green">X </span> Tie.
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{" "}
          <span className={isXNext ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return (
    <div className="status-messagf">
      {/* {winner && <div>Winner is {winner}</div>}
      {!winner && noMovesLeft && <div>O and X Tie.</div>}
      {!winner && !noMovesLeft && <div>Next Player is{nextPlayer}</div>} */}
      {renderStatusMessage()}
    </div>
  );
};

export default Statusmessage;
