import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./Reducers";
import storage from "redux-persist/lib/storage";

const hasExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  process.env.NODE_ENV === "development" && hasExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk,logger))
);
const persistor = persistStore(store);

export default { store, persistor };