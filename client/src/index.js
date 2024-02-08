import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//import { useDispatch } from "react-redux";
import { thunk } from "redux-thunk";
import './index.css'
import reducers from "./reducers";
import App from "./App";

//const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
