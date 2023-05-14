import { Route, Routes } from "react-router-dom";
import Mainlayout from "./Components/Mainlayout";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Mainlayout />}>
          <Route element={<Home />} path={"/"} />
          <Route element={<Starred />} path={"/starred"} />
        </Route>
        <Route element={<div>Not Found</div>} path={"*"} />
      </Routes>
    </div>
  );
}

export default App;
