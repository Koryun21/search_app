import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeApi } from "../entities/theme/model/themeApi";

const rootReducer = combineReducers({
  [themeApi.reducerPath]: themeApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
