import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./Reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [thunk];
// if (process.env.NODE_ENV !== "development") {
//   middleware.push(logger);
// }

export const store = legacy_createStore(
  reducer,
  compose(applyMiddleware(thunk, logger), composeWithDevTools())
);
