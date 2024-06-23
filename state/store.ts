import { configureStore } from "@reduxjs/toolkit";

import groupsReducer from "./GroupsSlice"


export const store = configureStore({
  reducer: {
    groups: groupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
