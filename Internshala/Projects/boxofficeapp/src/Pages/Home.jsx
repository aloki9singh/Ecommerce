import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchforActors, searchforShows } from "../api/tvmaze";
import ActorsGrid from "../Components/actors/ActorsGrid";
import Searchform from "../Components/Searchform";
import ShowGrid from "../Components/shows/ShowGrid";

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apidataError, setApidataError] = useState(null);

  const onSearch = async (inputValue, searchOption) => {
    try {
      setApidataError(null);
      const data =
        searchOption == "shows"
          ? await searchforShows(inputValue)
          : await searchforActors(inputValue);
      setApiData(data);
    } catch (error) {
      setApidataError(error);
    }
  };
   const renderApiData = () => {
    if (apidataError) {
      return <div>Error occured:{apidataError.message}</div>;
    }
    if (apiData?.length == 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? <ShowGrid shows={apiData} /> : <ActorsGrid actors={apiData}/>;
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
