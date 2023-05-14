import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchforActors, searchforShows } from "../api/tvmaze";
import Searchform from "../Components/Searchform";

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
    if (apiData) {
      return apiData[0].show
        ? apiData.map((e) => <div key={e.show.id}>{e.show.name}</div>)
        : apiData.map((e) => <div key={e.person.id}>{e.person.name}</div>);
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
