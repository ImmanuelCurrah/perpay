import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/data";
import rootReducer from "../rootReducer/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
