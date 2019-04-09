import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./component/App";
import Reducers from "./reducers";

const store = createStore(Reducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
