import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getShowsById } from "../api/tvmaze";

const useShowById = (id) => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getShowsById(id);
        console.log(res);
        setShowData(res);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [id]);
  return { showData, showError };
};

const Show = () => {
  const { id } = useParams();
  const { showData, showError } = useShowById(id);

  if (showError) {
    return <div>We have error : {showError.message}</div>;
  }
  if (showData) {
    return <div>We have Data: {showData.name}</div>;
  }
  return <div>Data is loading </div>;
};

export default Show;
