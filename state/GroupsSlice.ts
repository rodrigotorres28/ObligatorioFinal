import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Standings } from '../types/Standings';
import { Group } from '../types/Group';

interface GroupsState {
  [groupName: string]: Group;
}

const unplayedMatch = -1;

const initialState: GroupsState = {
  groupA: {
    groupId: 1,
    displayName: "GROUP A",
    teams: [1, 2, 3, 4],
    stats: {
      1: { teamId: 1, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      2: { teamId: 2, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      3: { teamId: 3, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      4: { teamId: 4, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
    matches: {
      matchA: { matchName:"matchA", team1Id: 1, team2Id: 4, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchB: { matchName:"matchB", team1Id: 2, team2Id: 3, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchC: { matchName:"matchC", team1Id: 3, team2Id: 1, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchD: { matchName:"matchD", team1Id: 2, team2Id: 4, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchE: { matchName:"matchE", team1Id: 1, team2Id: 2, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchF: { matchName:"matchF", team1Id: 4, team2Id: 3, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
    },
  },
  groupB: {
    groupId: 2,
    displayName: "GROUP B",
    teams: [5, 6, 7, 8],
    stats: {
      5: { teamId: 5, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      6: { teamId: 6, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      7: { teamId: 7, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      8: { teamId: 8, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
    matches: {
      matchA: { matchName:"matchA", team1Id: 5, team2Id: 8, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchB: { matchName:"matchB", team1Id: 6, team2Id: 7, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchC: { matchName:"matchC", team1Id: 7, team2Id: 5, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchD: { matchName:"matchD", team1Id: 6, team2Id: 8, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchE: { matchName:"matchE", team1Id: 5, team2Id: 6, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchF: { matchName:"matchF", team1Id: 8, team2Id: 7, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
    },
  },
  groupC: {
    groupId: 3,
    displayName: "GROUP C",
    teams: [9, 10, 11, 12],
    stats: {
      9: { teamId: 9, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      10: { teamId: 10, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      11: { teamId: 11, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      12: { teamId: 12, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
    matches: {
      matchA: { matchName:"matchA", team1Id: 9, team2Id: 12, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchB: { matchName:"matchB", team1Id: 10, team2Id: 11, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchC: { matchName:"matchC", team1Id: 11, team2Id: 9, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchD: { matchName:"matchD", team1Id: 10, team2Id: 12, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchE: { matchName:"matchE", team1Id: 9, team2Id: 10, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchF: { matchName:"matchF", team1Id: 12, team2Id: 11, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
    },
  },
  groupD: {
    groupId: 4,
    displayName: "GROUP D",
    teams: [13, 14, 15, 16],
    stats: {
      13: { teamId: 13, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      14: { teamId: 14, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      15: { teamId: 15, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      16: { teamId: 16, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
    matches: {
      matchA: { matchName:"matchA", team1Id: 13, team2Id: 16, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchB: { matchName:"matchB", team1Id: 14, team2Id: 15, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchC: { matchName:"matchC", team1Id: 15, team2Id: 13, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchD: { matchName:"matchD", team1Id: 14, team2Id: 16, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchE: { matchName:"matchE", team1Id: 13, team2Id: 14, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
      matchF: { matchName:"matchF", team1Id: 16, team2Id: 15, team1Goals: unplayedMatch, team2Goals: unplayedMatch },
    },
  },
};

const updateTeamStats = (team: Standings, goalsFor: number, goalsAgainst: number, isNewMatch: boolean) => {
  if (isNewMatch) {
    team.goalsFor += goalsFor;
    team.goalsAgainst += goalsAgainst;
    team.goalDifference = team.goalsFor - team.goalsAgainst;
    team.points += goalsFor > goalsAgainst ? 3 : goalsFor === goalsAgainst ? 1 : 0;
    team.wins += goalsFor > goalsAgainst ? 1 : 0;
    team.ties += goalsFor === goalsAgainst ? 1 : 0;
  } else {
    team.goalsFor -= goalsFor;
    team.goalsAgainst -= goalsAgainst;
    team.goalDifference = team.goalsFor - team.goalsAgainst;
    team.points -= goalsFor > goalsAgainst ? 3 : goalsFor === goalsAgainst ? 1 : 0;
    team.wins -= goalsFor > goalsAgainst ? 1 : 0;
    team.ties -= goalsFor === goalsAgainst ? 1 : 0;
  }
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    updateMatch(state, action: PayloadAction<{ groupName: string; matchName: string; team1Goals: number; team2Goals: number }>) {
      const { groupName, matchName, team1Goals, team2Goals } = action.payload;
      const group = state[groupName];
      const match = group.matches[matchName];
      const isMatchPlayedBefore = match.team1Goals !== unplayedMatch && match.team2Goals !== unplayedMatch;

      if (isMatchPlayedBefore) {
        updateTeamStats(group.stats[match.team1Id], match.team1Goals, match.team2Goals, false);
        updateTeamStats(group.stats[match.team2Id], match.team2Goals, match.team1Goals, false);
      }

      match.team1Goals = team1Goals;
      match.team2Goals = team2Goals;

      updateTeamStats(group.stats[match.team1Id], team1Goals, team2Goals, true);
      updateTeamStats(group.stats[match.team2Id], team2Goals, team1Goals, true);
    },
  },
});

export const { updateMatch } = groupsSlice.actions;
export default groupsSlice.reducer;
