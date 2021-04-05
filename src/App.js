import React from "react";
import "./styles.scss";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";
import { store, persistor } from "./store";
import Loading from "./components/loading";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="app">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
