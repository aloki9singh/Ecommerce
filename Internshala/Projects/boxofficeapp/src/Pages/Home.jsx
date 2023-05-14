import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { searchforActors, searchforShows } from "../api/tvmaze";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apidataError, setApidataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const handleChange = (e) => setInputValue(e.target.value);
  const onSearch = async (e) => {
    e.preventDefault();
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
  const onRadiochange = (e) => {
    setSearchOption(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <label>
          Shows
          <input
            checked={searchOption == "shows"}
            type="radio"
            name="search-option"
            value={"shows"}
            onChange={onRadiochange}
          />
        </label>
        <label>
          Actors
          <input
            checked={searchOption == "actors"}
            type="radio"
            name="search-option"
            value={"actors"}
            onChange={onRadiochange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div id="container">{renderApiData()}</div>
    </div>
  );
};

export default Home;
