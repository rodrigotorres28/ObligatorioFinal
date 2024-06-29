import { configureStore } from "@reduxjs/toolkit";

import groupsReducer from "./GroupsSlice"
import teamsReducer from './TeamsSlice';


export const store = configureStore({
  reducer: {
    groups: groupsReducer,
    teams: teamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
