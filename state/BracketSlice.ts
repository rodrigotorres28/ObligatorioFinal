import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamInBracket } from "../types/TeamInBracket";

interface BracketMatch {
  matchName: string;
  team1: TeamInBracket;
  team2: TeamInBracket;
}

interface BracketState {
  quarterFinals: { [key: string]: BracketMatch };
  semiFinals: { [key: string]: BracketMatch };
  final: BracketMatch;
}

const initialTeam: TeamInBracket = {
  name: undefined,
  flag: undefined,
  goals: -1,
  toBeDecidedText: "To be decided",
};

const initialState: BracketState = {
  quarterFinals: {
    match1: {
      matchName: "match1",
      team1: { ...initialTeam, toBeDecidedText: "Group A 1st (TBD)" },
      team2: { ...initialTeam, toBeDecidedText: "Group B 2nd (TBD)" },
    },
    match2: {
      matchName: "match2",
      team1: { ...initialTeam, toBeDecidedText: "Group B 1st (TBD)" },
      team2: { ...initialTeam, toBeDecidedText: "Group A 2nd (TBD)" },
    },
    match3: {
      matchName: "match3",
      team1: { ...initialTeam, toBeDecidedText: "Group C 1st (TBD)" },
      team2: { ...initialTeam, toBeDecidedText: "Group D 2nd (TBD)" },
    },
    match4: {
      matchName: "match4",
      team1: { ...initialTeam, toBeDecidedText: "Group D 1st (TBD)" },
      team2: { ...initialTeam, toBeDecidedText: "Group C 2nd (TBD)" },
    },
  },
  semiFinals: {
    semifinal1: {
      matchName: "semifinal1",
      team1: { ...initialTeam },
      team2: { ...initialTeam },
    },
    semifinal2: {
      matchName: "semifinal2",
      team1: { ...initialTeam },
      team2: { ...initialTeam },
    },
  },
  final: {
    matchName: "final",
    team1: { ...initialTeam },
    team2: { ...initialTeam },
  },
};

const bracketSlice = createSlice({
  name: "bracket",
  initialState,
  reducers: {
    updateBracket: (state, action: PayloadAction<BracketState>) => {
      return action.payload;
    },
    addQuarterFinalTeam(
      state,
      action: PayloadAction<{
        matchName: string;
        team: TeamInBracket;
        isTopTeam: boolean;
      }>
    ) {
      const { matchName, team, isTopTeam } = action.payload;
      const match = state.quarterFinals[matchName];
      if (isTopTeam) {
        match.team1 = team;
      } else {
        match.team2 = team;
      }
    },
    addSemiFinalTeam(
      state,
      action: PayloadAction<{
        matchName: string;
        team: TeamInBracket;
        isTopTeam: boolean;
      }>
    ) {
      const { matchName, team, isTopTeam } = action.payload;
      const match = state.semiFinals[matchName];
      if (isTopTeam) {
        match.team1 = team;
      } else {
        match.team2 = team;
      }
    },
    addFinalTeam(
      state,
      action: PayloadAction<{ team: TeamInBracket; isTopTeam: boolean }>
    ) {
      const { team, isTopTeam } = action.payload;
      const match = state.final;
      if (isTopTeam) {
        match.team1 = team;
      } else {
        match.team2 = team;
      }
    },
  },
});

export const {
  updateBracket,
  addQuarterFinalTeam,
  addSemiFinalTeam,
  addFinalTeam,
} = bracketSlice.actions;
export default bracketSlice.reducer;
