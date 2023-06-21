import React, { useReducer } from "react";
import { useEffect } from "react";
import ShowCard from "./ShowCard";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

// { type:"STAR",showId:''}
// { type:"UNSTAR",showId:''}
const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowsReducer,
    [],
    "starredShows"
  );

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
        />
      ))}
    </div>
  );
};

export default ShowGrid;
