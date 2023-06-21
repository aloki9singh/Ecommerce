//custom hook
  <div dangerouslySetInnerHTML={{ __html: summary }} />
  this above property will remove extra html tags inside api summary
-------------------------------

  If you user to navigate user in newpage on Click then:-

--------------------------------

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

//Custom hook
--------------------------------------
//use reducer

import React, { useReducer } from "react";
import { useEffect } from "react";
import ShowCard from "./ShowCard";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

// { type:"STAR",showId:''}
// { type:"UNSTAR",showId:''}
const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowsReducer,
    [],
    "starredShows"
  );

  const onStarClick = (showId) => {
    const isStarred = starredShows.includes(showId);
    isStarred
      ? dispatchStarred({ type: "UNSTAR", showId })
      : dispatchStarred({ type: "STAR", showId });
  };
  return (
    <div className="shows">
      {shows.map((e) => (
        <ShowCard
          key={e.show.id}
          name={e.show.name}
          image={e.show.image ? e.show.image.medium : "/notfound.png"}
          id={e.show.id}
          summary={e.show.summary}
          onStarClick={onStarClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
-----------------------------------------

## fetching library

https://swr.vercel.app/docs/getting-started

https://tanstack.com/query/latest/docs/react/overview#motivation       //this library is used to fetch


import { Route, Routes } from "react-router-dom";
import Mainlayout from "./Components/Mainlayout";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Starred from "./Pages/Starred";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route element={<Home />} path={"/"} />
            <Route element={<Starred />} path={"/starred"} />
            <Route element={<Show />} path={"show/:id"} />
          </Route>
          <Route element={<div>Not Found</div>} path={"*"} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
---------------------------------------
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getShowsById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";

const Show = () => {
  const { id } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", id],
    queryFn: () => getShowsById(id),
  });

  //  const result= useQuery({ queryKey: ["show", id], queryFn: () => getShowsById(id) });
  //  const {data,error}=result
  if (showError) {
    return <div>We have an error : {showError.message}</div>;
  }
  if (showData) {
    return <div>We have Data: {showData.name}</div>;
  }
  return <div>Data is loading </div>;
};

export default Show;
--------------------------------------




npm install appwrite


const client = new Client();

<!-- Init your SDK
Now that you've downloaded the SDK, it's time to initialze it. Use your project ID, which can be found in your project settings page. -->

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64906019db1fb5429289');





