import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HamContextProvider from "./HamContextProvider";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HamContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HamContextProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
