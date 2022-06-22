// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);

export default store;
