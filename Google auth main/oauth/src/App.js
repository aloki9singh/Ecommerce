import "./App.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const clientId =
  "693269405611-76ni091ft9tvmdstsflrts255del06ts.apps.googleusercontent.com";

function App() {
 useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
