import React from "react";
import {   useStarredShows } from "../lib/useStarredShows";

const Starred = () => {
  const [starredShows] = useStarredShows()

  return (
    <div>
      <h1>Starred {starredShows.length}</h1>
    </div>
  );
};

export default Starred;
