import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//redux 6,7
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //use <Provide></Provider> to getting all store data to all component and within use store={store} that is exported from redux/store.js
  <Provider store={store}>
    <App />
  </Provider>
);
