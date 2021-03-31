import "./index.css";
import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
