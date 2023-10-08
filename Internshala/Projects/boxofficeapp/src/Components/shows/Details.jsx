import React from "react";
import styled from "styled-components";
const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <div>Status: {status}</div>
      <div>
        Premiered: {premiered} {network ? `on ${network.name}` :null}
      </div>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;