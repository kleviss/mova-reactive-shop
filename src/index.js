import React from "react";
import ReactDOM from "react-dom";
import reactDebugHooks from "react-debug-hooks";
import "./styles/index.css";
import { AppContextProvider } from "./context.js";
import App from "./components/App";

reactDebugHooks(React);

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
