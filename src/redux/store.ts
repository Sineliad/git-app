import { createStore, compose, applyMiddleware } from "redux";
// import the root reducer
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchGetRepos } from "../saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchGetRepos);

export default store;
