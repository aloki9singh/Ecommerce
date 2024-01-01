import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import * as ServiceWorkerRegistration from "./serviceWorkerRegistration"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>

  // </BrowserRouter>
);

// if (process.env.NODE_ENV == "production") {
//   ServiceWorkerRegistration.register();
// }
