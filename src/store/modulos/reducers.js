import { combineReducers } from "redux";

import user from "./users/reducers";

const reducers = combineReducers({
  user,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
