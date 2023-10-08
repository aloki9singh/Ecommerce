import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getShowsById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../Components/shows/ShowMainData";
import Details from "../Components/shows/Details";
import Seasons from "../Components/shows/Seasons";
import Cast from "../Components/shows/Cast";
import styled from "styled-components";
import { TextCenter } from "../Components/common/TextCenter";
const Show = () => {
  const { id } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", id],
    queryFn: () => getShowsById(id),
    refetchOnWindowFocus: false,
  });

  console.log(showData); //  const result= useQuery({ queryKey: ["show", id], queryFn: () => getShowsById(id) });
  //  const {data,error}=result
  if (showError) {
    return <TextCenter>We have an error : {showError.message}</TextCenter>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go Back to home</Link>
        </BackHomeWrapper>

        <ShowMainData
          key={showData.id}
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2> Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2> Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>Data is loading </TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
