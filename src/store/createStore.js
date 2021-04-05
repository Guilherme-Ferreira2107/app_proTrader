import { createStore, applyMiddleware } from "redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
