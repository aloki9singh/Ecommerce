import React from "react";

const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <div>Status: {status}</div>
      <div>
        Premiered: {premiered} {network ? `on ${network.name}` :null}
      </div>
    </div>
  );
};

export default Details;
