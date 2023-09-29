import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import { searchforActors, searchforShows } from "../api/tvmaze";
import ActorsGrid from "../Components/actors/ActorsGrid";
import Searchform from "../Components/Searchform";
import ShowGrid from "../Components/shows/ShowGrid";

const Home = () => {
  const [filter, setFilter] = useState("");
 
  const { data: apiData, error: apidataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption == "shows"
        ? searchforShows(filter.inputValue)
        : searchforActors(filter.inputValue),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async (inputValue, searchOption) => {
    setFilter({ inputValue, searchOption });
  };
  const renderApiData = () => {
    if (apidataError) {
      return <div>Error occured:{apidataError.message}</div>;
    }
    if (apiData?.length == 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <Searchform onSearch={onSearch} />
      <div id="container">{renderApiData()}</div>
    </div>
  );
};

export default Home;