import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Team } from "../types/Team"

interface Group {
  groupId: number;
  teams: { [teamName: string]: Team };
}

interface GroupsState {
  [groupName: string]: Group;
}

const initialState: GroupsState = {
  groupA: {
    groupId: 1,
    teams: {
      teamA: { teamId: 1, name: 'Argentina', flag: require('./flags/ar.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamB: { teamId: 2, name: 'Peru', flag: require('./flags/pe.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamC: { teamId: 3, name: 'Chile', flag: require('./flags/cl.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamD: { teamId: 4, name: 'Canada', flag: require('./flags/ca.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
  },
  groupB: {
    groupId: 2,
    teams: {
      teamA: { teamId: 5, name: 'Mexico', flag: require('./flags/mx.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamB: { teamId: 6, name: 'Ecuador', flag: require('./flags/ec.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamC: { teamId: 7, name: 'Venezuela', flag: require('./flags/ve.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamD: { teamId: 8, name: 'Jamaica', flag: require('./flags/jm.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
  },
  groupC: {
    groupId: 3,
    teams: {
      teamA: { teamId: 9, name: 'USA', flag: require('./flags/us.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamB: { teamId: 10, name: 'Uruguay', flag: require('./flags/uy.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamC: { teamId: 11, name: 'Panama', flag: require('./flags/pa.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamD: { teamId: 12, name: 'Bolivia', flag: require('./flags/bo.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
  },
  groupD: {
    groupId: 4,
    teams: {
      teamA: { teamId: 13, name: 'Brazil', flag: require('./flags/br.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamB: { teamId: 14, name: 'Colombia', flag: require('./flags/co.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamC: { teamId: 15, name: 'Paraguay', flag: require('./flags/py.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
      teamD: { teamId: 16, name: 'Costa Rica', flag: require('./flags/cr.png'), goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0, ties: 0, points: 0 },
    },
  },
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    updateTeam(state, action: PayloadAction<{ groupName: string; teamName: string; goalsFor: number; goalsAgainst: number; wins: number; ties: number; }>) {
      const { groupName, teamName, goalsFor, goalsAgainst, wins, ties } = action.payload;
      const team = state[groupName].teams[teamName];
      team.goalsFor = goalsFor;
      team.goalsAgainst = goalsAgainst;
      team.goalDifference = goalsFor - goalsAgainst;
      team.wins = wins;
      team.ties = ties;
      team.points = wins * 3 + ties;
    },
  },
});

export const { updateTeam } = groupsSlice.actions;

export default groupsSlice.reducer;