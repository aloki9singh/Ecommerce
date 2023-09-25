import React, { useReducer } from "react";
import { useEffect } from "react";
import { starredShowsReducer, usePersistedReducer, useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows()

  const onStarClick = (showId) => {
    const isStarred = starredShows.includes(showId);
    isStarred
      ? dispatchStarred({ type: "UNSTAR", showId })
      : dispatchStarred({ type: "STAR", showId });
  };
  return (
    <div className="shows">
      {shows.map((e) => (
        <ShowCard
          key={e.show.id}
          name={e.show.name}
          image={e.show.image ? e.show.image.medium : "/notfound.png"}
          id={e.show.id}
          summary={e.show.summary}
          onStarClick={onStarClick}
          isStarred={starredShows.includes(e.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
