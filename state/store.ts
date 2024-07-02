import { configureStore } from '@reduxjs/toolkit';
import groupsReducer from './GroupsSlice';
import teamsReducer from './TeamsSlice';
import bracketReducer from './BracketSlice';

export const store = configureStore({
  reducer: {
    groups: groupsReducer,
    teams: teamsReducer,
    bracket: bracketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

