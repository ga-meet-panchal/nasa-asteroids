import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import DisplayRandom from "./containers/DisplayRandom/reducer";
import DisplayById from "./containers/DisplayById/reducer";

const rootReducer = combineReducers({
  displayById: DisplayById,
  displayRandom: DisplayRandom
});

const configureStore = () => {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancer = [middlewareEnhancer];
  const composedEnhancer = compose(...enhancer);
  const store = createStore(rootReducer, composedEnhancer);
  return store;
};

export default configureStore;
