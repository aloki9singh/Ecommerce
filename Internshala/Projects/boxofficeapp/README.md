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





NEXT_PUBLIC_APPWRITE_PROJECT_ID=649472112ca931e31b7d
NEXT_PUBLIC_APPWRITE_DATABASE_ID=649473202092c0453078
NEXT_PUBLIC_USERS_COLLECTION_ID=649473443f600898a9af
NEXT_PUBLIC_APPWRITE_API_KEY=cc43f087006ed6cc52182341786f3da31f69e423f088d43afd18e57646f7f6b1947f62897314c678cbedbce334fcdc3aac09db54165dc5b3fb6ef4fe472d8144a1c6062c9c52050ce644d743785b6dc4f774efe838d46499a6d9ff0de9cadd3edf9656bb370edaf28e823216a88c81bae42d0aaca251dc22ef8b56dc11beaa66

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1,
 NEXT_PUBLIC_APPWRITE_PROJECT =649472112ca931e31b7d,
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=649473443f600898a9af
NEXT_PUBLIC_APPWRITE_DATABASE_ID=649473202092c0453078
NEXT_PUBLIC_APPWRITE_API_KEY=cc43f087006ed6cc52182341786f3da31f69e423f088d43afd18e57646f7f6b1947f62897314c678cbedbce334fcdc3aac09db54165dc5b3fb6ef4fe472d8144a1c6062c9c52050ce644d743785b6dc4f774efe838d46499a6d9ff0de9cadd3edf9656bb370edaf28e823216a88c81bae42d0aaca251dc22ef8b56dc11beaa66



























import { getApps, initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBv6TnKcKz_0Jr7Rx2Z2hVS0tyxrseatAw",
  authDomain: "neatskill.firebaseapp.com",
  databaseURL:
    "https://neatskill-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neatskill",
  storageBucket: "neatskill.appspot.com",
  messagingSenderId: "745615461354",
  appId: "1:745615461354:web:8be587f1d7e23229694093",
  measurementId: "G-9ZEE56FQQF",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCCQYP1zEjLAuGU9g_P2fATrAx-VtlIlYc",
//   authDomain: "neat-60028.firebaseapp.com",
//   projectId: "neat-60028",
//   storageBucket: "neat-60028.appspot.com",
//   messagingSenderId: "250714772468",
//   appId: "1:250714772468:web:ca3e5dc3d86337ffbedfa1",
//   measurementId: "G-K0EGT2Y6RZ"
// };
// latest config
//
// =======
// const firebaseConfig = {
//   apiKey: "AIzaSyBv6TnKcKz_0Jr7Rx2Z2hVS0tyxrseatAw",
//   authDomain: "neatskill.firebaseapp.com",
//   databaseURL: "https://neatskill-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "neatskill",
//   storageBucket: "neatskill.appspot.com",
//   messagingSenderId: "745615461354",
//   appId: "1:745615461354:web:8be587f1d7e23229694093",
//   measurementId: "G-9ZEE56FQQF"
// };
//

// const firebaseConfig = {
//   apiKey: "AIzaSyAtAA2o79XeKRBPp61TuM4ok7t6Ng4UYH0",
//   authDomain: "neatskills-1c31c.firebaseapp.com",
//   projectId: "neatskills-1c31c",
//   storageBucket: "neatskills-1c31c.appspot.com",
//   messagingSenderId: "713774382237",
//   appId: "1:713774382237:web:10b5a3c85d22f4d859a874",
//   measurementId: "G-QWYMTLSSEK",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyA2u0xg4KVAMz_GAjzm3DdVsqXvCIzsbM4",
//   authDomain: "neatskills9.firebaseapp.com",
//   projectId: "neatskills9",
//   storageBucket: "neatskills9.appspot.com",
//   messagingSenderId: "952981699338",
//   appId: "1:952981699338:web:e09b299b7e5df400e898f3",
//   measurementId: "G-3F1WXPES83"
// };

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// }; const firebaseConfig = {
//   apiKey: "AIzaSyAtAA2o79XeKRBPp61TuM4ok7t6Ng4UYH0",
//   authDomain: "neatskills-1c31c.firebaseapp.com",
//   projectId: "neatskills-1c31c",
//   storageBucket: "neatskills-1c31c.appspot.com",
//   messagingSenderId: "713774382237",
//   appId: "1:713774382237:web:10b5a3c85d22f4d859a874",
//   measurementId: "G-QWYMTLSSEK",
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig, "baseApp");

//  const app = initializeApp(firebaseConfig, 'neatskills-1c31c');

// const app = initializeApp(firebaseConfig, 'neatskills9');

//  const app = initializeApp(firebaseConfig, 'neat-60028');


// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const AssignmentsCollection = collection(db, "assignment");
export const courseAssignmentCollection = collection(db, "course_assignments");
export const profileDetailscollection = collection(db, "users");
export const mentorsdetailCollection = collection(db, "mentorsdetail");
export const mentorsCollection = collection(db, "mentors");
export const usersCollection = collection(db, "allusers");
export const mentorsSchedduleCollection = collection(db, "mentorsSchedule");
export const DailyTipsCollection = collection(db, "dailytip");


https://gist.github.com/shelooks16/d0d533d129f1469e5ccb28fb7337959f
