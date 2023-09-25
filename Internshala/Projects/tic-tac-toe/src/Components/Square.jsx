import React from "react";

const Square = ({ value, onClick,isWinningSquare }) => {
  return (
    <button className={`square`} onClick={onClick}>
      <div id={isWinningSquare?"winning":""} className={value == "X" ? "text-green" : "text-orange"}>{value}</div>
    </button>
  );
};

export default Square;
