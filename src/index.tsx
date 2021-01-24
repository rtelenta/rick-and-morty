import React from "react";
import ReactDOM from "react-dom";
import App from "features/App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./state";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
