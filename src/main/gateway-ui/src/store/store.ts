import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import mainSlice from "./features/mainSlice";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  main: mainSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
