import React from "react";

const History = ({ history, moveTo ,currentMove}) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((e, i) => (
          <li key={i}>
            <button className={`btn-move${currentMove==i?"active":""}`} onClick={() => moveTo(i)}>
              {i == 0 ? "Go to Game Start" : `Go to move #${i}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
