import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/data";

const store = configureStore({
  reducer: dataReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
