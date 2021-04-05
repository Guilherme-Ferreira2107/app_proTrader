import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "wallets",
      storage,
    },
    reducers
  );

  return persistedReducer;
};
