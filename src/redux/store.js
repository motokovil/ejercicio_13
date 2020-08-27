//Store se conforma de dos métodos (combineReducers y createStore )
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { chatReducer } from "./chat/reducer";

const store = createStore(
  combineReducers({ chatReducer }),
  applyMiddleware(logger)
);

export default store;
