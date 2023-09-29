import React from "react";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../api/tvmaze";
import ShowGrid from "../Components/shows/ShowGrid";
const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const { data: starredShows, error: starredError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });
  if (starredShows?.length == 0) {
    return <div>No shows were starred.</div>
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredError) {
    return <div>Error occured: {starredError.message}</div>
  }
  return (
    <div>
      <h1>Shows are loading...</h1>
    </div>
  );
};

export default Starred;
