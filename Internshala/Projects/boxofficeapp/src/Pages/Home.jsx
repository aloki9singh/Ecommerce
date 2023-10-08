import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import { searchforActors, searchforShows } from "../api/tvmaze";
import ActorsGrid from "../Components/actors/ActorsGrid";
import Searchform from "../Components/Searchform";
import ShowGrid from "../Components/shows/ShowGrid";
import styled, { css } from "styled-components";
import { TextCenter } from "../Components/common/TextCenter";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: "#BF4F74";
      color: white;
    `}
`;

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
      return <TextCenter>Error occured:{apidataError.message}</TextCenter>;
    }
    if (apiData?.length == 0) {
      return <TextCenter>No Results</TextCenter>;
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
