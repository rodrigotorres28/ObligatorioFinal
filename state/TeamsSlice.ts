import { createSlice } from "@reduxjs/toolkit";
import { Team } from "../types/Team";

interface TeamsState {
  [teamId: number]: Team;
}

const initialState: TeamsState = {
  1: { teamId: 1, name: "Argentina", flag: require("../assets/flags/ar.png") },
  2: { teamId: 2, name: "Peru", flag: require("../assets/flags/pe.png") },
  3: { teamId: 3, name: "Chile", flag: require("../assets/flags/cl.png") },
  4: { teamId: 4, name: "Canada", flag: require("../assets/flags/ca.png") },
  5: { teamId: 5, name: "Mexico", flag: require("../assets/flags/mx.png") },
  6: { teamId: 6, name: "Ecuador", flag: require("../assets/flags/ec.png") },
  7: { teamId: 7, name: "Venezuela", flag: require("../assets/flags/ve.png") },
  8: { teamId: 8, name: "Jamaica", flag: require("../assets/flags/jm.png") },
  9: { teamId: 9, name: "USA", flag: require("../assets/flags/us.png") },
  10: { teamId: 10, name: "Uruguay", flag: require("../assets/flags/uy.png") },
  11: { teamId: 11, name: "Panama", flag: require("../assets/flags/pa.png") },
  12: { teamId: 12, name: "Bolivia", flag: require("../assets/flags/bo.png") },
  13: { teamId: 13, name: "Brazil", flag: require("../assets/flags/br.png") },
  14: { teamId: 14, name: "Colombia", flag: require("../assets/flags/co.png") },
  15: { teamId: 15, name: "Paraguay", flag: require("../assets/flags/py.png") },
  16: {
    teamId: 16,
    name: "Costa Rica",
    flag: require("../assets/flags/cr.png"),
  },
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
});

export default teamsSlice.reducer;
