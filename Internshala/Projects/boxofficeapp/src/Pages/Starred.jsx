import React from "react";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../api/tvmaze";
import ShowGrid from "../Components/shows/ShowGrid";
import { TextCenter } from "../Components/common/TextCenter";
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
    return <TextCenter>No shows were starred.</TextCenter>
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredError) {
    return <TextCenter>Error occured: {starredError.message}</TextCenter>
  }
  return (
    <TextCenter>
      <h1>Shows are loading...</h1>
    </TextCenter>
  );
};

export default Starred;
