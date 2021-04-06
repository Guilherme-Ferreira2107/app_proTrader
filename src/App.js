import React from "react";
import "./styles.scss";

import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store/modulos/users/reducers";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
