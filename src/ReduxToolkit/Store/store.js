import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Store/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
