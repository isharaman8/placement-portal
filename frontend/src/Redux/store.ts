import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import {configureStore} from "@"
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./Reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { notificationReducer } from "./Reducers/notifications.reducer";

// const middleware = [thunk];
// if (process.env.NODE_ENV !== "development") {
//   middleware.push(logger);
// }

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	login: reducer,
	notifications: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
	persistedReducer,
	compose(applyMiddleware(thunk, logger), composeWithDevTools())
);

export const persistor = persistStore(store);

store.subscribe(() => {
	console.log(store.getState());
});
