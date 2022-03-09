import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Store from "./Store";

const options = {
  positions: positions.TOP_CENTER,
  timeout: 5000,
  transitions: transitions.SCALE,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
