import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { AppContextProvider } from "./context.js";
import App from "./components/App";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
