import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />

        <Route path="/view/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
