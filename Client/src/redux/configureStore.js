import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
